/// <reference types ="cypress" />

import loginSelectors from  '../../fixtures/selectors/loginSelectors.js'
import data from '../../fixtures/example.json'


describe ('Login Test using SWAGLABS page', ()=> {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce('PrestaShop-a30a9934ef476d11b6cc3c983616e364')
        
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')

    })

    it('Cookie', ()=>{
        
       // cy.login('qatestauto90@gmail.com', 'password')
       // cy.get(loginSelectors.orderButton).should('be.visible')

       cy.setCookie('PrestaShop-a30a9934ef476d11b6cc3c983616e364', data.cookie)
       cy.reload()

    })


})