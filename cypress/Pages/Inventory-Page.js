
const {
    Base
} = require("../Helper/Base.js")

const shared = new Base()


export class InventoryPage{ 
    ValidatePageTitle (expectedText){
        cy.get('.title').should('have.text', expectedText)
    }

    AddFirstItemtoCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }

    AddSecondItemtoCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    }

    AddThirdItemtoCart(){
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    }
    ClickOnshopping(){
        cy.get('.shopping_cart_link').click()
    }
    
}
