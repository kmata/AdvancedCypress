// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import loginselectors from '../fixtures/selectors/loginSelectors'
// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => { 

    cy.get(loginselectors.username).type(email)
    cy.get(loginselectors.password).type(password)
    cy.get(loginselectors.loginBtn).click()

    

  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
