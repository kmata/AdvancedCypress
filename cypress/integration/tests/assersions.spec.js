/// <reference types ="cypress" />

import selector from '../../fixtures/selectors/selectors.js'

describe ('Assertions Module', () => {

beforeEach (()=>{
    cy.visit('/')
    cy.get(selector.inputTxt , {timeout:6000}).type("Cookie{enter}")
    cy.get(selector.inputTxt , {timeout:6000}).type("Milk{enter}")
    cy.get(selector.inputTxt , {timeout:6000}).type("App{enter}")

})

it('Regular Asserisions', () => {
    cy.get(selector.label)
    .eq(0)
    .should('contain.text', 'App')

    cy.get(selector.label)
    .eq(1)
    .should('contain.text', "Milk")
})

it('Multiple Assertions', () =>{
    cy.get(selector.label)
    .then (item => {

        if (item.length !== 3){
            throw new Error ('Not enough elements!')
        }

        expect(item[0]).to.contains.text('App')
        expect(item[1]).to.contains.text('Milk')
    })


})

})