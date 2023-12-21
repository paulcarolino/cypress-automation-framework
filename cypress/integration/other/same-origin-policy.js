/// <reference types="cypress"/>

describe("Cypress web security", ()=>{
    it("Validated visity two diffferent domains", ()=>{
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit("https://automationteststore.com/");
    })

    it("Validated visity two diffferent domains", () =>{
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    })
})