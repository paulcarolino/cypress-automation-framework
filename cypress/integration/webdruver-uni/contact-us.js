/// <reference types="cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
describe("Test Contact Us form via WebdriverUni", () => {
  beforeEach(() => {
    // cy.visit("https://www.webdriveruniversity.com/");
    // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    const homepage_PO = new HomePage_PO();
    homepage_PO.visitHomePage();
    homepage_PO.clickOn_ContactUs_Button();
    cy.fixture("example.json").as("data");
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get("@data").then((data) => {
      cy.get('[name="first_name"]').type(Cypress.env("first_name"));
      cy.get('[name="last_name"]').type(data.last_name);
      cy.get('[name="email"]').type(data.email);
    });
    cy.get("textarea.feedback-input").type("How can I learn Cypress?");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.get('[name="first_name"]').type("Tom");
    cy.get('[name="last_name"]').type("blogs");
    cy.get("textarea.feedback-input").type("How can I learn Cypress?");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
