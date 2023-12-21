/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  before(() => {
    cy.fixture("products.json").as("data");
  });
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Add specific items to basket", () => {
    cy.get("@data").then((data) => {
      for (let i = 0; i < data.productName.length; i++) {
        cy.addToCart(data.productName[i]);
      }
    });
  });
});
