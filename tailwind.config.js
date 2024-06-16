/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "veryDarkBlue": "hsl(230, 17%, 14%)",
        "veryDarkBlueTwo": "hsl(232, 19%, 15%)",
        "desatBlue": "hsl(228, 34%, 66%)",
        "darkDesatBlue": "hsl(228, 28%, 20%)",
        "darkDesatBlueH": "#333a56",
        "faceColor": "#2e92ea",
        "twitColor": "#34a1e7",
        "youtColor": "#b71739"
      },
      fontFamily: {
        "inter": "Inter"
      }
    },
  },
  plugins: [],
}

