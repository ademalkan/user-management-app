describe("dashboard page", () => {
    beforeEach(() => {
        cy.visit('/dashboard')
    })
    it("checks dashboard", () => {
        cy.get("div.md\\:w-4\\/5.max-\\[600px\\]\\:w-screen.max-\\[600px\\]\\:relative.max-\\[600px\\]\\:overflow-x-auto.py-3.md\\:py-0.md\\:ml-auto.md\\:p-12.md\\:pl-0")
            .find("div")
            .should("have.length", 6);
    });



})