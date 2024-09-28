/// <reference types = "cypress" />

describe("my 3rd Test Suite", function(){

    it ("static drop down ", function(){

        // to launch web application
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // handle static dropdown
        cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2');

    });

    it ("dynamic drop down ", function(){

        // to launch web application
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // handle dynamic dropdown
        cy.get('#autocomplete').type("ind");
        cy.get('[class="ui-menu-item"] >div').each(($el)=>{
            if($el.text()==="India"){
                cy.wrap($el).click();
            }

        });
    });

    it ("visible and invisible element assertion ", function(){

        // to launch web application
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible');

    });

    it ("handle radio button ", function(){

        // to launch web application
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('input[value="radio1"]').check()

    });

});