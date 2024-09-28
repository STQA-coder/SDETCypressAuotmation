/// <reference types = "cypress" />

const dataFile = require('../../fixtures/example.json')
import HomePage from '../PageObjects/HomePage';
/**
 * Best Practice to build cypress Framework
 * setting the test hooks
 * Data driven testing with fixtures
 * Parameterize test with multiple data sets
 * test debug
 * POM pattern 
 * 
 */

describe("This is my 11th framework suite", ()=>{
  const homePage=  new HomePage()

    // before(function(){
    //     cy.fixture('example').then((data)=>{

    //        this.Data =data

    //     });
    // });

    it("Framework understanding", ()=>{

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.getUserName().type(dataFile.name);
        homePage.getgender().select(dataFile.gender)

        // two way data binding assertion
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', dataFile.name)
        // min length attr validation
        cy.get(':nth-child(1) > .form-control').should("have.attr", 'minlength', '2');
        // enterpreneurship disability validation
        cy.get('#inlineRadio3').should('be.disabled')

        // click on shop button
        cy.get(':nth-child(2) > .nav-link').click()

        dataFile.productName.forEach(function(element){
            cy.SelectProduct(element);
        })
        
    });
});

