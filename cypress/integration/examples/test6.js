/// <reference types = "cypress" />

describe("This is my 6th suite", () => {

    it("web table handle", () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').each(($el, index)=>{
            const text = $el.text()
            if(text.includes("Python")){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    cy.log(priceText)
                    expect(priceText).to.equal('25')
                })
            }
        });
    });

});