const loginElement = require('../ElementsMap/LoginElementsMap.json')

export class LoginAction { 

    //outra forma de declarar os elementos » name = "#nome"
    PreencheCPF(){
        cy.get(loginElement.LoginPageLocators.cpf)
        .focus()
        .type('06445988911')
    }
    PreenchePass(){
        cy.get(loginElement.LoginPageLocators.pass)
        .focus()
        .type('homepage')
    }
    GoSubmit(){
        cy.get(loginElement.LoginPageLocators.loginform)
        .submit();
    }

}

