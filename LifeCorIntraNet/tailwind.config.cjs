/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],

  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "bg-intranet": "url('/background-intranet.png')",
        "text-fill-gradient":
          "linear-gradient(89.86deg, #9572fc 23.08%, #43e7ad 33.94%, #e1d55d 44.57%)",
        "gradient-dark-to-transparent":
          "linear-gradient(180deg,rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
        "bg-lifecor":
          "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url('/background-lifecor.png')",
      },
    },
  },
  plugins: [],
};
