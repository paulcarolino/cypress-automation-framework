/// <reference types="cypress" />

describe("Verify Checkboxes via WebD Driver Uni", () => {
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Check and validate", () => {
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check();
    cy.get("@option-1").should("be.checked");
  });

  it("Check and validate for uncheckbox", () => {
    cy.get("#checkboxes > :nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
  });

  it("Check multiple chekcboxes", () => {
    cy.get("input[type='checkbox']").as("checkboxes").check();
    cy.get("@checkboxes").each((checkbox) => {
      expect(checkbox[0].checked).to.equal(true);
    });
  });
});
