import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  //   theme: {
  //     extend: {
  //       colors: {
  //         background: "var(--background)",
  //         foreground: "var(--foreground)",
  //       },
  //       fontFamily: {
  //         heebo: ["heebo", "serif", "sans-serif"],
  //         inter: ["inter", "sans-serif"],
  //       },
  //     },
  //     screen: {
  //       sm: { max: "375" },
  //       lg: { max: "1440" },
  //     },
  //   },
  //   plugins: [],
  // };

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    screens: {
            sm: { min: "300px", max:"700px" },
            // md: { min: "501", max:"1000px" },
          },
  },
  plugins: [],
};
export default config;
