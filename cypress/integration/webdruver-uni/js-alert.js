/// <reference types="cypress" />

describe("Handle JS alert", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        cy.get("#button1").click();
        cy.on('window:alert', str => {
            expect(str).to.eq("I am an alert box!")
        })
    });


    it("Validate js confirm alert box confirm correctly when clicking ok", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        cy.get("#button4").click();
        cy.on('window:alert', str => {
            return true;
        })
        cy.get("#confirm-alert-text").contains('You pressed OK!')
    });

    it("Validate js confirm alert box confirm correctly when clicking cancel", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        cy.get("#button4").click();
        cy.on('window:confirm', str => {
            return false;
        })
        cy.get("#confirm-alert-text").contains('You pressed Cancel!')
    });

    it.only("Validate js confirm alert box using stub", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
        const stub = cy.stub();
        console.log(stub);
        cy.on("window:confirm", stub)
        cy.get("#button4").click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        })
        
    });
})