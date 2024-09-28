/// <reference types = "cypress" />

describe("This is my 7th suite", () => {

    it("mouse hover handle", () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    });

});