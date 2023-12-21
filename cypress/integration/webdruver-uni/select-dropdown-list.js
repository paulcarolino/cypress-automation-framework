/// <reference types="cypress" />

describe("Verify Drop Down List via WebD Driver Uni", () => {
    it("Check Drop Down List", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr', 'target').click({force:true})
        cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng")
        cy.get("#dropdowm-menu-3").select("jquery").contains("JQuery")

        cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven")
        cy.get("#dropdowm-menu-2").select("testng").should("contain", "TestNG")

    });



});

    

