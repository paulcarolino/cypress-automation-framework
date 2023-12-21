/// <reference types="cypress" />

describe("Test Mouse Actions", () => {
    it("Scroll Element into View", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click();
    });

    it("I should be able to drag and drop an Item", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click();
        cy.get("#draggable").trigger("mousedown", {which: 1})
        cy.get("#droppable").trigger("mousemove").trigger('mouseup', {force: true})
    });

    it("I should be able to double clikc", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click();
        cy.get("#double-click").dblclick();
     
    });

    it.only("I should be hold down the left mouse click key on a given item", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click();
        cy.get("#double-click").dblclick();
        cy.get("#click-box").trigger("mousedown", {which: 1}).then(element => {
            expect(element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
     
    });
});

    

