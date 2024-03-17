// tailwind.config.js

module.exports = {
  darkMode: "class",
  theme: {
    extend: {},
  },
  content: ["./src/**/*.js"],
  plugins: [
    // Include the TailGrids plugin
    require("tailgrids/plugin"),
  ],
};
