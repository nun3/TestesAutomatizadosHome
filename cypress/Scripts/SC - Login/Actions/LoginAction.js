const loginElement = require('../ElementsMap/LoginElementsMap.json')

export class LoginAction { 

    //outra forma de declarar os elementos » name = "#nome"
    PreencheCPF(){
        const 
        cpfcontext = '06445988911'

        cy.get(loginElement.LoginPageLocators.cpf)
        .focus()
        .type(cpfcontext)
    }
    PreenchePass(){
        const 
        passcontext = 'homepage'

        cy.get(loginElement.LoginPageLocators.pass)
        .type(passcontext)
    }
    GoSubmit(){
        cy.get(loginElement.LoginPageLocators.loginform)
        .submit();
    }

}

