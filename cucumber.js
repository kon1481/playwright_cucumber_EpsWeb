module.exports = {
  default: {
    require: ["src/test/step-definitions/**/*.ts",
              "src/test/hooks/**/*.ts"
    ],  
    paths: ["src/test/features/**/IncommHealthCare.feature"],
    requireModule: ["ts-node/register"], 
    format: ["progress-bar","json:reports/cucumber-report.json"],
    worldParameters: {
      browserPath: "C:\\Users\\kon1481\\AppData\\Local\\chrome-win\\chrome.exe" 
    }
  },
};
