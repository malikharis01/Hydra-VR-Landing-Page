import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors: {
      //   "background": "#302C42",
      //   "mywhite": "#ffffff",
      //   "w2": "#C0B7E8",
      //   "p1": "#8176AF",
      //   "p2": "#C0B7E8",
      //   "text1": "#343045",  
      //   "p4": "#211E2E",
      //   "p3": "#3A3456" 
      // }
      colors: {
        "background": "#2D124A",
        "mywhite": "#ffffff",
        "w2": "#C0B7E8", //divider
        "p1": "#C0B7E8", // secondary pink
        "p2": "#B470DA", // heading
        "text1": "#343045",  //button text
        "p4": "#6221A6", //skills outer
        "p3": "#B470DA" //skills inner
      }
    },
  },
  plugins: [],
};
export default config;
