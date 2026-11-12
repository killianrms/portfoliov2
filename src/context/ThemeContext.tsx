"use client";

import { useCallback, useLayoutEffect, useSyncExternalStore, type ReactNode } from "react";
import { THEME_COLOR, type Theme } from "@/lib/theme";

// The theme lives on <html> as a class (set before first paint by the inline
// script in the layout), so this is a thin store over the DOM rather than
// React state. Nothing remounts when it changes.
const listeners = new Set<() => void>();
let current: Theme | null = null;

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function read(): Theme {
  if (current === null) current = document.documentElement.classList.contains("light") ? "light" : "dark";
  return current;
}

// Writes only what differs, so the observer below never loops on its own changes.
function paint(theme: Theme) {
  const { classList } = document.documentElement;
  const other: Theme = theme === "dark" ? "light" : "dark";
  if (classList.contains(other)) classList.remove(other);
  if (!classList.contains(theme)) classList.add(theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta && meta.getAttribute("content") !== THEME_COLOR[theme]) meta.setAttribute("content", THEME_COLOR[theme]);
}

function setTheme(theme: Theme) {
  current = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Private mode or blocked storage: the choice just won't persist.
  }
  const { classList } = document.documentElement;
  classList.add("theme-switching");
  paint(theme);
  window.setTimeout(() => classList.remove("theme-switching"), 350);
  listeners.forEach((l) => l());
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Switching language swaps the [lang] root layout, and React then rewrites
  // the attributes of <html>: the theme class set outside React is lost and
  // the page silently falls back to the default theme. Put the visitor's theme
  // back before the browser paints, and keep watching the class afterwards.
  useLayoutEffect(() => {
    paint(read());
    const observer = new MutationObserver(() => paint(read()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, read, (): Theme => "dark");
  const toggleTheme = useCallback(() => {
    setTheme(read() === "dark" ? "light" : "dark");
  }, []);
  return { theme, toggleTheme };
}
