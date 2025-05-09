const reporter = require('cucumber-html-reporter');
const path = require('path');
const open = require('open');
const fs = require('fs');

const jsonFilePath = path.join(__dirname, 'reports/cucumber-report.json');
const htmlOutputPath = path.join(__dirname, 'reports/cucumber-report.html');

// Log file existence
console.log('📝 Checking for JSON report at:', jsonFilePath);
if (!fs.existsSync(jsonFilePath)) {
  console.error('JSON report not found. Report cannot be generated.');
  process.exit(1); // Exit early to prevent opening missing report
}

const options = {
  theme: 'bootstrap',
  jsonFile: jsonFilePath,
  output: htmlOutputPath,
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options, function () {
  console.log('HTML report generated at:', htmlOutputPath);

  open(htmlOutputPath)
    .then(() => {
      console.log('Report is now open in the browser!');
    })
    .catch((err) => {
      console.error('Error opening the report:', err);
    });
});
