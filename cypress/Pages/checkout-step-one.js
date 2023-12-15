const {
    Base
} = require("../Helper/Base.js")

const shared = new Base()

export class CheckoutStepOne{ 
   

    EnterFirstName(firstName){
        shared.enterInputText('[data-test="firstName"]',firstName)
       // cy.get('[data-test="firstName"]').type(FirstName)
    }

    EnterLastName(lastName){
        shared.enterInputText('[data-test="lastName"]',lastName)
        //cy.get('[data-test="lastName"]').type(LastName)
    }
    EnterZipCode(postalCode){
        shared.enterInputText('[data-test="postalCode"]',postalCode)
        //cy.get('[data-test="postalCode"]').type(PostalCde)
    }
    ClickOnContinue(){
        shared.clickOnElement('[data-test="continue"]')
        //cy.get('[data-test="continue"]').click()
    }
    
}
