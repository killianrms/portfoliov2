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

test("home renders in English at / with the photo and every section", async ({ page }) => {
  const errors = trackConsoleErrors(page);
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Killian");
  await expect(page.getByAltText(/Killian RAMUS/)).toBeVisible();
  for (const id of ["about", "journey", "projects", "skills", "contact"]) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
  expect(errors).toEqual([]);
});

test("French lives under /fr and the switch keeps the page", async ({ page }) => {
  await page.goto("/fr");
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.locator("#top")).toContainText("ITESOFT");
  // The desktop and mobile switches share the label; one of them is always hidden.
  await page.evaluate(() => (document.querySelector('button[aria-label="Switch to English"]') as HTMLButtonElement).click());
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("project pages and the legal notice are reachable", async ({ page }) => {
  await page.goto("/");
  await page.locator("#projects a[href^='/projects/']").first().click();
  await expect(page).toHaveURL(/\/projects\//);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.goto("/fr/legal");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Mentions légales");
  await expect(page.getByText("Vercel Inc.")).toBeVisible();
});

test("project filters narrow the list", async ({ page }) => {
  await page.goto("/");
  const rows = page.locator("#projects a[href^='/projects/']");
  const all = await rows.count();
  await page.locator("#projects button[aria-pressed]").nth(1).click();
  await expect(page.locator("#projects button[aria-pressed='true']")).toHaveCount(1);
  expect(await rows.count()).toBeLessThan(all);
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
  const startedAt = Date.now() - 10_000;
  const bad = await request.post("/api/contact", {
    data: { name: "Test", email: "not-an-email", message: "Hi", startedAt },
    headers: { "x-forwarded-for": "203.0.113.10" },
  });
  expect(bad.status()).toBe(400);

  const bot = await request.post("/api/contact", {
    data: { name: "Bot", email: "bot@example.com", message: "Spam", company: "ACME", startedAt },
    headers: { "x-forwarded-for": "203.0.113.11" },
  });
  expect(bot.status()).toBe(200);
});
