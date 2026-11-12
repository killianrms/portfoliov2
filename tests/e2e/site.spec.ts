import { expect, test, type Page } from "@playwright/test";

// Fails a test if the page logs an error (CSP violations, hydration errors...).
// Vercel Analytics' script only exists once deployed on Vercel, so outside
// Vercel its request is blocked here instead of showing up as an error.
function trackConsoleErrors(page: Page) {
  const errors: string[] = [];
  page.route("**/_vercel/insights/**", (route) => route.fulfill({ status: 204, contentType: "text/javascript", body: "" }));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(e.message));
  return errors;
}

const themeOf = (page: Page) =>
  page.evaluate(() => (document.documentElement.classList.contains("light") ? "light" : "dark"));

// The desktop and mobile bars each hold a copy of the switches; only one is visible.
const visibleButton = (page: Page, label: string | RegExp) =>
  page.getByRole("button", { name: label }).locator("visible=true");

test("home renders in English at / with the photo and every section", async ({ page }) => {
  const errors = trackConsoleErrors(page);
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Killian");
  await expect(page.getByAltText(/Killian RAMUS/)).toBeVisible();
  for (const id of ["autoinit", "about", "journey", "projects", "skills", "contact"]) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
  expect(errors).toEqual([]);
});

test("dark is the default theme, whatever the device setting", async ({ browser }) => {
  for (const colorScheme of ["light", "dark"] as const) {
    const context = await browser.newContext({ colorScheme });
    const page = await context.newPage();
    await page.goto("/");
    expect(await themeOf(page)).toBe("dark");
    await context.close();
  }
});

test("French lives under /fr and the switch keeps the page", async ({ page }) => {
  await page.goto("/fr");
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.locator("#top")).toContainText("ITESOFT");
  await page.evaluate(() => (document.querySelector('button[aria-label="Switch to English"]') as HTMLButtonElement).click());
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

// Regression: switching language used to reset <html> and silently change the theme.
test("switching language never changes the theme", async ({ page, isMobile }) => {
  const errors = trackConsoleErrors(page);
  const openMenu = async () => {
    if (isMobile) await page.getByRole("button", { name: /menu/i }).click();
  };
  const switchLanguage = async (label: string, lang: string) => {
    await openMenu();
    await visibleButton(page, label).click();
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
  };

  await page.goto("/");
  expect(await themeOf(page)).toBe("dark");
  await switchLanguage("Passer en français", "fr");
  expect(await themeOf(page)).toBe("dark");

  // Choose light, then go back and forth: the choice must hold, and survive a reload.
  await openMenu();
  await visibleButton(page, "Passer en mode clair").click();
  expect(await themeOf(page)).toBe("light");
  if (isMobile) await page.keyboard.press("Escape");
  await switchLanguage("Switch to English", "en");
  expect(await themeOf(page)).toBe("light");
  await switchLanguage("Passer en français", "fr");
  expect(await themeOf(page)).toBe("light");
  await page.reload();
  expect(await themeOf(page)).toBe("light");
  expect(errors).toEqual([]);
});

test("project pages and the legal notice are reachable", async ({ page }) => {
  const errors = trackConsoleErrors(page);
  await page.goto("/");
  await page.locator("#projects a[href^='/projects/']").first().click();
  await expect(page).toHaveURL(/\/projects\//);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.goto("/fr/legal");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Mentions légales");
  await expect(page.getByText("Vercel Inc.")).toBeVisible();
  expect(errors).toEqual([]);
});

test("project filters narrow the list", async ({ page }) => {
  await page.goto("/");
  const cards = page.locator("#projects a[href^='/projects/']");
  const all = await cards.count();
  await page.locator("#projects button[aria-pressed]").nth(1).click();
  await expect(page.locator("#projects button[aria-pressed='true']")).toHaveCount(1);
  expect(await cards.count()).toBeLessThan(all);
});

test("the page never scrolls sideways", async ({ page }) => {
  for (const path of ["/", "/fr", "/projects/itesoft-assistant-ingenieur", "/fr/legal"]) {
    await page.goto(path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, path).toBeLessThanOrEqual(0);
  }
});

test("unknown pages return 404", async ({ request }) => {
  expect((await request.get("/does-not-exist")).status()).toBe(404);
  expect((await request.get("/projects/does-not-exist")).status()).toBe(404);
});

test("security headers are set", async ({ request }) => {
  const headers = (await request.get("/")).headers();
  expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(headers["x-content-type-options"]).toBe("nosniff");
});

test("contact API validates input and ignores bots", async ({ request }) => {
  const elapsed = 10_000;
  const bad = await request.post("/api/contact", {
    data: { name: "Test", email: "not-an-email", message: "Hi", elapsed },
    headers: { "x-forwarded-for": "203.0.113.10" },
  });
  expect(bad.status()).toBe(400);

  // Honeypot filled in, or sent too fast: answered with a fake success, nothing is sent.
  const honeypot = await request.post("/api/contact", {
    data: { name: "Bot", email: "bot@example.com", message: "Spam", company: "ACME", elapsed },
    headers: { "x-forwarded-for": "203.0.113.11" },
  });
  expect(honeypot.status()).toBe(200);
  const tooFast = await request.post("/api/contact", {
    data: { name: "Bot", email: "not-an-email", message: "Spam", elapsed: 200 },
    headers: { "x-forwarded-for": "203.0.113.12" },
  });
  expect(tooFast.status()).toBe(200);
});
