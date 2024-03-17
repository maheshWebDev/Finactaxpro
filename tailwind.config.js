// tailwind.config.js

module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    // Include the TailGrids plugin
    require("tailgrids/plugin"),
  ],
};
