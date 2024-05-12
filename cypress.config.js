const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false, // ini dapat dari komunitas cypress , semisal klo pas running ada error dibagian get element, terus di cypressnya ada tulisan default blank page
  },
});
