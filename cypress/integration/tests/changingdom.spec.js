/// <reference types ="cypress" />

import selector from '../../fixtures/selectors/selectors.js'

describe ('Changing the DOM', () => {

    beforeEach(()=>{
        cy.visit('/')
        cy.get(selector.inputTxt , {timeout:6000}).type("Cookie{enter}")
    })

    it('Invoke', () =>{
        cy.get(selector.list)
        .should('contain.text', 'Cookie')

        cy.get(selector.removeX)
        .invoke('show')
        .should('be.visible')
        .click()

    })

    it('Trigger', () =>{
        cy.get(selector.list)
        .should('contain.text', 'Cookie')

        cy.get(selector.label)
        .trigger('mouseover')

        cy.get(selector.removeX)
        .should('not.be.visible')
    })
})