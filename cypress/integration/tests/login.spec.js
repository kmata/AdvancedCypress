/// <reference types ="cypress" />

import loginSelectors from  '../../fixtures/selectors/loginSelectors.js'


describe ('Login Test using SWAGLABS page', ()=> {

    it('Valid Login', ()=>{
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.login('qatestauto90@gmail.com', 'password')
        cy.get(loginSelectors.orderButton).should('be.visible')

    })


})