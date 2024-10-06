/// <reference types = "cypress" />

const dataFile = require('../../fixtures/example.json')
import HomePage from '../PageObjects/HomePage';
import shopPage from '../PageObjects/shopPage'
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
  const ShopPage = new shopPage()
  let Data;

    before(function(){
        cy.fixture('example').then(function(data){

Data=data

        });
    });

    it("Framework understanding", ()=>{

        cy.visit(Cypress.env("url")+"/angularpractice/");
     //   cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.getUserName().type(Data.name);
        homePage.getgender().select(Data.gender)

        // two way data binding assertion
        homePage.getDataBinding().should('have.value', dataFile.name)
        // min length attr validation
        homePage.getlengthValidation().should("have.attr", 'minlength', '2');
        // enterpreneurship disability validation
        homePage.getenterpreneurshipDisability().should('be.disabled')

        // click on shop button
        homePage.getShopButton().click()

        dataFile.productName.forEach(function(element){
            cy.SelectProduct(element);
        })

        ShopPage.getcheckout().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{
            
            const actualText = $el.text()
            var result = actualText.split(" ")

            /**
             * result[0] = ₹.
             * result[1] = 50000 etc
             */
            result = result[1].trim()
           sum = Number(sum)+Number(result)
           cy.log(sum)
        })

        cy.get('h3 > strong').invoke('text')
        .then((value)=>{

            const totalcount = value.split(" ")
           const newTotal =  totalcount[1]

           expect(Number(newTotal)).to.equal(sum)
        })
        cy.get('[class="btn btn-success"]').click()
        cy.get('#country').type('India')
        cy.contains("India").click()
        cy.get('#checkbox2').check();
        cy.get('[type="submit"]').click()
        
    });
});

