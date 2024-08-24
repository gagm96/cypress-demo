const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    env: {
        omitFiltered: true,
        filterSpecs: true
    },
    screenshotsFolder: "cypress/screenshots",
    baseUrl: "https://blazedemo.com",
    specPattern: "**/*.feature",
    fixturesFolder: "cypress/fixtures",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      allureCypress(on);
        return config;
    },
  },
});