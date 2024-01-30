/// <reference types="cypress"/>

describe("JSON Object Examples", () => {
  it("Json Object Examples", () => {
    const exampleObject = {
      key: "Tim",
      key2: "Jones",
    };
    const exampleArrayOfValue = ["Sophie", "Rose", "Howard"];
    const exampleArrayOfObjects = [
      { key: "Luke" },
      { key: "Dennis" },
      { key: "Luka" },
    ];
    const users = {
      firstName: "Joe",
      lastName: "Blogs",
      Age: 30,
      Student: [
        {
          firstName: "Jim",
          lastName: "Blogs",
        },
        {
          firstName: "Sarah",
          lastName: "Parker",
        },
      ],
    };
 
    exampleArrayOfObjects.forEach((element) => {
      cy.log(element.key);
    });
  });
});
