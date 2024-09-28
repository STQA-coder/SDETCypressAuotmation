/// <reference types = "cypress" />

describe("This is my 8th suite", () => {

    it("child window handle another way", () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then((el)=>{

                   const url = el.prop('href')
                   cy.visit(url);
                   cy.origin(url, ()=>{
                    cy.get('#navbarSupportedContent a[href*="about"]').click()
                    cy.get('.mt-50 h2').should('contain', "QAClick Academy")

                   })

        })

    
    });

});