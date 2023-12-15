export class Base {
  clickOnElement(selector) {
    cy.get(selector).click()
  }
  enterInputText(selector, text) {
    cy.get(selector).type(text)
  }
}
