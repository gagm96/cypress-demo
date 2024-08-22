const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  name: 'Test Results',
  jsonDir: './cypress/cucumber-json',
  output: './cypress/reports/html/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  brandTitle: "BlazeDemo QA Automation Test Report (Cucumber)",
  columnLayout: 1,
  failedSummaryReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome  54.0.2840.98",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);