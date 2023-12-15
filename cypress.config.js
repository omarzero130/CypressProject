const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    "reportDir": "cypress/results",
    "overwrite": true,
    "html": true,
    "json": true
 },
 
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

  },
  
});