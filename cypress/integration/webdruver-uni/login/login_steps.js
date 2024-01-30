import {
  Before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";

let stub;
Before(() => {
  stub = cy.stub();
});

Given("I access the WebdriverUniversity Login Portal page", () => {
  cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html");
});

When("I enter a username {word}", (userName) => {
  cy.get("#text").type(userName);
});

And("I enter a password {word}", (password) => {
  cy.get("#password").type(password);
});

And("I click login button", () => {
  cy.get("#login-button").click();
  cy.on("window:alert", stub);
});

Then(
  "I should be presented wit the following message {word} {word}",
  (msg, msg1) => {
    const expectedMessage = message + " " + message2;
    cy.log(stub.getCall(0));
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage);
  }
);
