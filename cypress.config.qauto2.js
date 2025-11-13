const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.js',
  },
  env: {
    USER_EMAIL: 'user2+qa@example.com',
    USER_PASSWORD: 'Qwerty123!',
    GUEST_LOGIN: 'guest',
    GUEST_PASSWORD: 'welcome2qauto'
  }
});