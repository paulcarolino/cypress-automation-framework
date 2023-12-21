/// <reference types="cypress" />

describe("Test Datepicker via webdriveruni", () => {
    it("Select Date from datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#datepicker").invoke('removeAttr', 'target').click({force:true})

        var date = new Date();
        date.setDate(date.getDate() + 500);
        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log(`${futureYear} ${futureMonth} ${futureDay}`)
        cy.get("#datepicker").click()
    

        const selectMonthAndYear = () => {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                 }
            }).then(()=>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                     }
                })
            })
        }
        const selectFutureDay = () => {
            cy.get(".day").contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();


    });

    


})