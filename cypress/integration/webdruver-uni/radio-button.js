/// <reference types="cypress" />

describe("Verify Radio Button via WebD Driver Uni", () => {
  before(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("Check specific Radio", () => {
    cy.get("#radio-buttons").find("[type='radio']").first().check();
    cy.get("#radio-buttons").find("[value='purple']").check();
  });

  it("Validate the states of speicifc radio buttons", () => {
    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='pumpkin']").should("be.checked");
    cy.get("[value='lettuce']").check().should("be.checked");
    cy.get("[value='cabbage']").should("be.disabled");
  });
});
