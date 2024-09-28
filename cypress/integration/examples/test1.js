/// <reference types = "cypress" />

describe("my first Test Suite", function(){

    it ("My first test case", function(){

        // to launch web application
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        /**
         * CSS Selector
         * id         #idvalue
         *            tag#idvalue  [id="idvalue"]
         * class      .classvalue
         *             tag#idvalue [class="classvalue"]
         * Customization of CSS
         * tagename[attribute="value"]
         * 
         */

        // Search fruts and veg with CA
        cy.get('input[placeholder="Search for Vegetables and Fruits"]').type('ca');
        //input[@placeholder="Search for Vegetables and Fruits"]
        cy.wait(5000);
        // add 
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        cy.get('.products').find('.product').each(($el, index,$list)=>{
            const textVeg = $el.find('h4.product-name').text();

            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click();
            }
        })
        cy.get('[class="cart-count"]').should('have.text','2'); 
        cy.get('.cart-icon >img').click();
        cy.contains("PROCEED TO CHECKOUT").click();
        cy.contains('Place Order').click();
    });
});