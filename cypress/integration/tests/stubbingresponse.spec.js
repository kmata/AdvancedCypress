/// <reference types ="cypress" />

describe ('Stubbing response', () => {

    it('Login Request Test', () => {
            
        cy.intercept ({
            method: 'GET',
            url: 'https://www.nacion.com/pf/api/v3/content/fetch/resize-image-api-client?query=%7B%22raw_image_url%22%3A%22%2Fpf%2Fresources%2Fla-nacion%2Ffallback-promo-image.png%3Fd%3D39%22%2C%22respect_aspect_ratio%22%3Atrue%7D&d=39&_website=la-nacion' },
            {
                body: [],
        }).as('Auto')
    
        cy.visit('https://www.nacion.com/')

    })

    it('Function Test', () => {
            
        cy.intercept ({
            method: 'GET',
            url: 'https://www.nacion.com/pf/api/v3/content/fetch/resize-image-api-client?query=%7B%22raw_image_url%22%3A%22%2Fpf%2Fresources%2Fla-nacion%2Ffallback-promo-image.png%3Fd%3D39%22%2C%22respect_aspect_ratio%22%3Atrue%7D&d=39&_website=la-nacion' },
            (req) => {
                req.reply((res)=> {
                    console.log(res)
                })
                
            
                
        }).as('Auto')
    
        cy.visit('https://www.nacion.com/')
    
       
    
    
    })

    })