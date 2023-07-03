describe("sidebar checks", () => {
    beforeEach(() => {
        cy.visit('/dashboard')
    })

    it("active user test", () => {
        cy.get("h6").should('contain.text', 'John Doe')
        cy.get("p").should('contain.text', 'Admin')
    })
    it("checks sidebar", () => {
        cy.get("div.w-full.grid.grid-cols-2.gap-2.px-2.md\\:grid-cols-1.md\\:gap-0.md\\:block.md\\:px-10")
            .children("div")
            .should("have.length", 6);
        cy.get("button").should('contain.text', 'Logout')
    });

    it("checks sidebar click to link and switch page", () => {
        cy.get("div.w-full.grid.grid-cols-2.gap-2.px-2.md\\:grid-cols-1.md\\:gap-0.md\\:block.md\\:px-10")
          .children("div")
          .should("have.length", 6);
        cy.contains("a", "Students")
          .click()
          .then(() => {
            cy.url().should("include", "/students");
          });
      });

})