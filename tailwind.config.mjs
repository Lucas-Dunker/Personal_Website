import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
      cursive: ["Just Another Hand"],
    },
    extend: {
      textColor: {
        main: "rgb(var(--color-text-main) / <alpha-value>)",
      },
      backgroundColor: {
        main: "rgb(var(--color-bg-main) / <alpha-value>)",
        muted: "rgb(var(--color-bg-muted) / <alpha-value>)",
      },
      borderColor: {
        main: "rgb(var(--color-border-main) / <alpha-value>)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
};
