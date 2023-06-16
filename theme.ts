import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--brand": "#F7AB0A",
  "--red": "#db4437",
  "--yellow": "#f4b400",
  "--green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  // Base theme colors
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  // Brand
  "--brand-primary": props["--brand"],

  // Default Button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--brand"],
  "--default-button-success-color": props["--green"],
  "--default-button-warning-color": props["--yellow"],
  "--default-button-danger-color": props["--red"],

  // State
  "--state-info-color": props["--brand"],
  "--state-success-color": props["--green"],
  "--state-warning-color": props["--yellow"],
  "--state-danger-color": props["--red"],

  // Navbar
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color-inverted": props["--my-white"],

  "--focus-color": props["--brand"],
});
