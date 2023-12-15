const {
    Base
} = require("../Helper/Base.js")

const shared = new Base()

export class CheckoutStepTwo{ 
   
    ClickOnFinish(){
        shared.clickOnElement('[data-test="finish"]')
        //cy.get('[data-test="finish"]').click()
    }
    
}
