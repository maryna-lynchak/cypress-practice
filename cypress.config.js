const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space', 
   retries: {
    runMode: 1,
    openMode: 1
   },
   //reporter: 'cypress-multi-reporters',
  //reporterOptions: {
    //configFile: 'reporter-config.json',  
  },
 reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },

 //  viewportHeight: 200,
 //  viewportWidth: 300
 defaultCommandTimeout: 8000,
 pageLoadTimeout: 30000,
 video: true,
 screenshotOnRunFailure: true,
projectId: "mfzvwi"
});
