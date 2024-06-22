// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
beforeEach(() => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }
});

// Ignore uncaught exceptions related to ServiceWorker registration
Cypress.on("uncaught:exception", (err) => {
  // we can filter for the specific error message related to ServiceWorker registration
  if (err.message.includes("Failed to register a ServiceWorker")) {
    // return false to prevent the error from failing the test
    return false;
  }
  // allow other errors to fail the test
  return true;
});
