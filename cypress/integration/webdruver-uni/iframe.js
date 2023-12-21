/// <reference types="cypress" />

describe("Handling IFrame and Modals", () => {
    it("Handle webdriveruni iframe and Modal", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#iframe").invoke('removeAttr', 'target').click({force:true})
        cy.get('#frame').then(frame => {
            const body = frame.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get("@iframe").find('#button-find-out-more').click();
        cy.get("@iframe").find('#myModal').as('modal');
        cy.get('@modal').should(element =>{
            const text = element.text()
            expect(text).to.include("Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras.");
        })
        cy.get('@modal').contains('Close').click();
    });

    


})