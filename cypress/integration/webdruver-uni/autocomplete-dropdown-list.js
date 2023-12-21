/// <reference types="cypress" />


describe("Validate webdriveruni homepage links", () => {
    it("Select Specific Product Via Autocomplete", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({force:true});
        cy.get("#myInput").type("a");
        cy.get("#myInputautocomplete-list > *").each((element, index, list)=>{
           const prod = element.text();
           const productToSelect = 'Avacado';
           if(prod === productToSelect) {
            
            element.trigger("click");

            cy.get("#submit-button").click();
            cy.url().should('include', productToSelect);
           }
        }).then(()=>{
            cy.get("#myInput").type("G")
            cy.get("#myInputautocomplete-list > *").each((element, index, list)=>{
                const prod = element.text();
                const productToSelect = 'Grapes';
                if(prod === productToSelect) {
                 
                 element.trigger("click");
     
                 cy.get("#submit-button").click();
                 cy.url().should('include', productToSelect);
                }
             })
        })
    });


})