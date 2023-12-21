/// <reference types="cypress" />
describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail")
        cy.get("@productThumbnail").its("length").should("be.gt",5);
        cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
    })

    it("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        cy.get('@productThumbnail').should('have.length', 16);
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Cart')
    })

    it.only("Calculate total of normal and sale products", ()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each((element,index, list)=>{
        //   cy.log(element.text())
        // })
        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice');
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

        var itemsTotal = 0;
        cy.get('@itemPrice').then(linkText => {
            var itemPrice = linkText.split('$');
            for (let i = 0; i < itemPrice.length; i++) {
                itemsTotal += Number(itemPrice[i]);
            }

         })
         cy.get('@saleItemPrice').then(linkText => {
            var saleItemPrice = linkText.split('$');
            for (let i = 0; i < saleItemPrice.length; i++) {
                itemsTotal += Number(saleItemPrice[i]);
            }
         })
         .then(()=>{
            expect(itemsTotal).to.equal(660.5)
         })
    })

})