/// <reference types="Cypress" />

import { LoginAction } from "../Actions/LoginAction"
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const LoginAct = new LoginAction
const url = Cypress.config("baseUrl")

Given(`que realizei o login no Filt com usuario padrão`, () => {
    cy.visit(url)

    LoginAct.PreencheCPF()
    LoginAct.PreenchePass()
    LoginAct.GoSubmit()
});