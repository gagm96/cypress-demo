const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    env: {
        omitFiltered: true,
        filterSpecs: true
    },
    baseUrl: "https://blazedemo.com",
    specPattern: "**/*.feature",
    fixturesFolder: "cypress/fixtures",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});