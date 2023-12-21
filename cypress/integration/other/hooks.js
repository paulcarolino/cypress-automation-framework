/// <reference types="cypress"/>

describe("Cypress web security", () => {
  before(() => {
    cy.log("runs once before all tests in the block");
  });

  after(() => {
    cy.log("Runs once after all tests in the block");
  });

  beforeEach(() => {
    cy.log("Runs before each test in the block");
  });

  afterEach(() => {
    cy.log("Runs after each test in the block");
  });

  it("Examole test1", () => {
    cy.log("Example test1!");
  });

  it("Examole test2", () => {
    cy.log("Example test2!");
  });
});
