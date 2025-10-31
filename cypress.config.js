const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://example.cypress.io',
   retries: {
    runMode: 1,
    openMode: 1
   },
 //  viewportHeight: 200,
 //  viewportWidth: 300
 defaultCommandTimeout: 8000,
 pageLoadTimeout: 30000,
 video: true,
 screenshotOnRunFailure: true
  },
  projectId: "mfzvwi",
});
