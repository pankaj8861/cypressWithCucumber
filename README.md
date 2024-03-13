# cypressWithCucumber

## 🚀 Lets get started...

## 🟩 PART 1️⃣

## 1. Create an empty repo in VCS (e.g. GitHub) and clone
## 2. Initialize node project and install cypress

```
npm init -y
npm install cypress --save-dev
npx cypress open
```

## 3. Add BDD support (Gherkin syntax)

### Install

```
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
npm install @badeball/cypress-cucumber-preprocessor --save-dev
```

### add to config

`cypress.config.js`

```javascript
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
	specPattern: "**/*.feature",
  },
});

```

### configure the cypress-cucumber-preprocessor to using global step definitions

`package.json`

```javascript
"cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/step_definitions/",
    "nonGlobalStepDefinitions": false
  }
```

