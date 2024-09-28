/// <reference types = "cypress" />

describe("my second Test Suite", function(){

    it ("Handle check box drop down ", function(){

        // to launch web application
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        /*
        * handle check box
        1st way by using click method click()
        2nd way by using check method check()

        chai library should, exepect and assert
         */ 

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        // multiple check box hit
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
    });
});