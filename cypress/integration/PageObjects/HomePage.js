class HomePage{

    getUserName(){

        return cy.get(':nth-child(1) > .form-control')

    }

    getgender(){
      return  cy.get('#exampleFormControlSelect1')
    }

    getDataBinding(){

      return cy.get(':nth-child(4) > .ng-untouched')
    }

    getlengthValidation(){

      return cy.get(':nth-child(1) > .form-control')
    }

    getenterpreneurshipDisability(){

      return cy.get('#inlineRadio3')
    }

    getShopButton(){
      return cy.get(':nth-child(2) > .nav-link')
    }


}
export default HomePage