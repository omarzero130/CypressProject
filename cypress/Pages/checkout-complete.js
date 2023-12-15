
const {
    Base
} = require("../Helper/Base.js")

const shared = new Base()

export class CheckoutComplete {


    ValidateOnConfirmText(expectedText) {
        
        cy.get('.complete-header').should('have.text', expectedText)
    }

    BackToHomeScreen() {
        shared.clickOnElement('[data-test="back-to-products"]')
        //cy.get('[data-test="back-to-products"]').click()
    }
   
}