/// <reference types = "cypress" />

describe("This is my 4th suite", ()=>{

    it("Alert and window popup handle", ()=>{
        
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        cy.on('window:alert', (str)=>{

            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        });

        let Name = "QAAutomation"
        cy.get('#name').type(Name);
        cy.get('#confirmbtn').click();
        let confirmationSTR = `Hello ${Name}, Are you sure you want to confirm?`
        cy.on('window:confirm', (str)=>{

            expect(str).to.equal(confirmationSTR)
        });


    });

});