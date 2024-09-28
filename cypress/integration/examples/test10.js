/// <reference types = "cypress" />

describe("This is my 10th suite", ()=>{

    it("Handle date picker", ()=>{

        const monthNumber = "6"
        const date   = "15"
        const year   = "2027"
        const expecetdList = [monthNumber, date, year]
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");

        cy.get("[class='react-date-picker__inputGroup']").click()
        cy.get("[class='react-calendar__navigation__label']").click()
        cy.get("[class='react-calendar__navigation__label']").click()
        cy.contains("button", year).click()
        cy.get("abbr").eq(Number(monthNumber)-1).click()
        cy.contains("abbr", date).click()

        // assertion
        cy.get('input[class*="react-date-picker__inputGroup__input"]').each(($el, index)=>{
            cy.wrap($el).invoke('val').should('eq', expecetdList[index])
        })

    })
})