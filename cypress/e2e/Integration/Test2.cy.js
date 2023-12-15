/// <reference types="cypress" />

describe('Test React app', {
        testIsolation: false
    },
    () => {

        it('Navigate and choose size', () => {
            cy.visit('https://react-shopping-cart-67954.firebaseapp.com')
            cy.get(':nth-child(8) > label > .checkmark').click()

        })

        it('Add First item to the cart', () => {
            cy.get('.dwOYCh > .sc-124al1g-0').click()
            cy.get('.sc-1h98xa9-0 > span').click()

        })
        it('Add Third item to the cart', () => {
            cy.get('.ctLSpw > .sc-124al1g-0').click()


        })
        it('Click on Checkout', () => {
            cy.get('.sc-1h98xa9-11').click()

        })


    })