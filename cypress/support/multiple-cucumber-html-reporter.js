const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './cypress/reports/html',
    openReportInBrowser: true,
    pageTitle: 'BlazeDemo QA Automated Tests Report',
    reportName: 'BlazeDemo QA Automated Tests Report',
    pageFooter: 'Report Created By: Gabriel Gonzalez',
    hideMetadata: true,
	metadata:{
        browser: {
            name: 'chrome',
            version: '127'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Report Information',
        data: [
            {label: 'QA Engineer', value: 'Gabriel Gonzalez'},
            {label: 'Project', value: 'Cypress Demo'},
            {label: 'Release', value: '1.0'}
        ]
    }
});
