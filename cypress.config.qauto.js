const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.js',
  },
  env: {
    
    USER_EMAIL: 'user1+qa@example.com',
    USER_PASSWORD: 'Qwerty123!',
    GUEST_LOGIN: 'guest',
    GUEST_PASSWORD: 'welcome2qauto'
  }
});