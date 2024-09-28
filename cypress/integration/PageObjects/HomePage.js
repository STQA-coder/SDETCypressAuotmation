class HomePage{

    getUserName(){

        return cy.get(':nth-child(1) > .form-control')

    }

    getgender(){
      return  cy.get('#exampleFormControlSelect1')
    }


}
export default HomePage