/// <reference types = "cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe'
describe("This is my 9th suite", ()=>{

    it("Iframe handle", ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.wait(5000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2);
    })
})