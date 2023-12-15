const { Base } = require("../Helper/Base.js");
const shared = new Base();
export class LoginPage {
  navigate() {
    cy.visit("https://www.saucedemo.com/");
  }
  EnterUserName(userName) {
    shared.enterInputText('[id="user-name"]', userName);
  }
  EnterPassword(password) {
    shared.enterInputText('[data-test="password"]', password);
  }
  ClickOnLogin() {
    shared.clickOnElement('[data-test="login-button"]')

  }
 /* Testparam(x) {
    cy.log(x.x,x.y)
  }
  Testparam({x:'test',y:'10'})*/
}
