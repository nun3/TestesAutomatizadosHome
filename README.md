Usar https://agenda-lista-de-contatos.vercel.app/ como site teste
link do video de referencia: https://www.youtube.com/watch?v=Dc0zyn2n6RQ
teste
Configuração padrão de url é definida em cypress.config.js

const cucumber = require('cypress-cucumber-preprocessor').default 
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'uqjmju',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://agenda-lista-de-contatos.vercel.app/" //AQUI
  },
});

LInks:
https://github.com/marketplace/actions/cypress-io#end-to-end-testing - cypress-io/github-action

executado
npm install --save-dev @testing-library/cypress
import '@testing-library/cypress/add-commands'