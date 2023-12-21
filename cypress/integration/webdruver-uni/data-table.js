/// <reference types="cypress" />


describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://www.webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });
  
    it("Calculate and assert the total age of all users", () => {
     var userDetails = [];
     let num = 0;
     cy.get("#t01 td").each(($element, index, $list) => {
        userDetails[index] = $element.text()
     }).then(()=>{
        var i;
        for(i= 0; i < userDetails.length; i++)
        {
            if(Number(userDetails[i]))
            {
                num +=  Number(userDetails[i]);
            }
        }
        expect(num).to.eq(159);
     })
    });

    it.only("Calculate and assert the total age of all users", () => {
        cy.get("#thumbnail-1 tr td:nth-child(2)").each(($element, index, $list) => {
            const text = $element.text();
            if(text.includes("Woods"))
            {
                cy.get("#thumbnail-1 tr td:nth-child(2)").eq(index).next().then(age =>{
                    const userAge = age.text();
                    expect(userAge).to.equal("80");
                })
            }
        })
    })

  });
  