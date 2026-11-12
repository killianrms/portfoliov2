export type Theme = "dark" | "light";

/** Browser UI colour (address bar) for each theme; matches --background. */
export const THEME_COLOR: Record<Theme, string> = { dark: "#08080c", light: "#f3f2f7" };

/**
 * Runs before first paint. The server always renders the dark theme; this
 * switches to light only for visitors who chose it, so nothing flashes.
 */
export const THEME_SCRIPT = `(function(){try{if(localStorage.getItem("theme")==="light"){var c=document.documentElement.classList;c.remove("dark");c.add("light");}}catch(e){}})();`;
