const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    },
    baseUrl: "https://web-orchestrator.dev.nisai.samagra.iocasdc/",
    chromeWebSecurity: false,
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports", // Directory where reports will be saved
      overwrite: false,
      html: true, // Generate HTML report
      json: true, // Generate JSON report (needed for merging and generating HTML)
      screenshots: true, // Capture screenshots
      video: true, // Record video
    },
  },
});
