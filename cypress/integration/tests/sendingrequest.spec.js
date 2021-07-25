/// <reference types ="cypress" />

describe ('Sending Requests', () => {

    it('Login Request Test', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')

        cy.request({
            method: 'POST',
            url: 'http://automationpractice.com/index.php?controller=authentication',
            form: true,
            body: {
                email: 'qatestauto90@gmail.com',
                passwd: 'password'
            },

        })      
        })
    })
