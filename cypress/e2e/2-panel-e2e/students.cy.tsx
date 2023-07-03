describe("students page", () => {
    beforeEach(() => {
        cy.visit('/students')
    })
    it("checks students page", () => {
        cy.get("input[placeholder=\"Search...\"]").type("test@gmail.com");
    });

})