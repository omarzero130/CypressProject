/// <reference types="cypress" />


 /*  beforeEach(() => {
        loginpage.navigate()
        loginpage.EnterUserName('standard_user')
        loginpage.EnterPassword('secret_sauce')
        loginpage.ClickOnLogin()
    })
*/

/*
Follwoing Lines

*/
const {
    Cart
} = require("../../Pages/Cart-page")
const {
    InventoryPage
} = require("../../Pages/Inventory-Page")
const {
    CheckoutStepOne
} = require("../../Pages/checkout-step-one")
const {
    LoginPage
} = require("../../Pages/login-page")
const {
    CheckoutStepTwo
} = require("../../Pages/checkout-step-two")
const {
    CheckoutComplete
} = require("../../Pages/checkout-complete")

describe('Login , Add to cart , checkout , logout ', {
    testIsolation: false
}, () => {


    const loginpage = new LoginPage()
    const Inventorypage = new InventoryPage()
    const Shoppingcart = new Cart()
    const checkoutstepone = new CheckoutStepOne()
    const checkoutsteptwo = new CheckoutStepTwo()
    const checkoutcomplete = new CheckoutComplete()

    describe('LOGIN', () => {
        it('Login to the website', () => {
            loginpage.navigate()
            cy.log("Navigated to the website")
            loginpage.EnterUserName('standard_user')
            cy.log("EnterUsername")
            loginpage.EnterPassword('secret_sauce')
            cy.log("Enter Passowrd")
            loginpage.ClickOnLogin()
            cy.log("Click on Login")

        })

        it('Assert on the page title ', () => {
            Inventorypage.ValidatePageTitle('Products')

        })
    })
   
    describe('ADD ITEMS TO THE CART', () => {
        it('Add First item to the  cart ', () => {
            Inventorypage.AddFirstItemtoCart()
        })
        it('Add Second item to the  cart ', () => {
            Inventorypage.AddSecondItemtoCart()
        })
        it('Add third item to the  cart ', () => {
            Inventorypage.AddThirdItemtoCart()
        })
        it('Click on the shoppingg cart ', () => {
            Inventorypage.ClickOnshopping()
        })
    })

    describe(' Click on Checkout btn ', () => {
        it('Cick on checkout', () => {
            Shoppingcart.ClickOnCheckout()
        })



    })

    describe(' Checkout Data-Step-one ', () => {
        it('EnterFirstName', () => {
            checkoutstepone.EnterFirstName("TestFirstname")
        })
        it('EnterLastName', () => {
            checkoutstepone.EnterLastName("TestLsatName")
        })
        it('EnterPostalCode', () => {
            checkoutstepone.EnterZipCode("11221")
        })
        it('ClickOnContinue', () => {
            checkoutstepone.ClickOnContinue()
        })


    })
    describe(' Checkout Data-Step-two ', () => {
        it('EnterFirstName', () => {
            checkoutsteptwo.ClickOnFinish()
        })

    })
    describe('Compelte Checkout ', () => {
        it('ValidateON', () => {
            checkoutcomplete.ValidateOnConfirmText("Thank you for your order!")
        })
        it('GotoHomePage', () => {
            checkoutcomplete.BackToHomeScreen()
        })

    })
})