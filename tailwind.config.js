/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"], // Text
        OpenSans: ["Open Sans", "sans-serif"], // Links
        UbuntuSans: ["Ubuntu Sans", "sans-serif"], // Titles
        BricolageGrotesque: ["Bricolage Grotesque", "sans-serif"], // Logo
      },
      colors: {
        primaryBlue: "#027bff",
        secondaryGray: "#6d747d",
        successGreen: "#29a645",
        bgSuccessGreen: '#f0fcf4',
        dangerRed: "#db3546",
        bgDangerRed: '#fef2f2',
        warningYellow: "#ffc008",
        bgWarningYellow: '#fefce7',
        infoTeal: "#1aa1b8",

        matteBlack: "#262625",
        coralOrange: "#e04b23",
        smokeGray: "#bebebe",
        matteWhite: "#ebebeb",
      },
    },
  },
};
