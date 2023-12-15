const {
    Base
} = require("../Helper/Base.js")

const shared = new Base()
export class Cart {
    ClickOnCheckout() {
        shared.clickOnElement('[data-test="checkout"]')
    }
}   