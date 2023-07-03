describe("login page", () => {
    beforeEach(() => {
        cy.visit('/')
      })
    
    it("testing all text", () => {
        cy.get("h1").should('contain.text', 'MANAGE COURSES')
        cy.get("div").should('contain.text', 'Enter your credentials to access your account')
        cy.get("p").should('contain.text', 'Enter your credentials to access your account')
        cy.get("div").should('contain.text', 'Email (demo: test@gmail.com)')
        cy.get("div").should('contain.text', 'Password (demo: password)')
        cy.get("div").should('contain.text', 'Forgot your password? Reset Password')
    })
    it("testing inputs and login button", () => {
        cy.get("input[placeholder=\"Enter your email\"]");
        cy.get("input[placeholder=\"Enter your password\"]");
        cy.get("input[placeholder=\"Enter your email\"]").type("test@gmail.com");
        cy.get("input[placeholder=\"Enter your password\"]").type("password");
        cy.get("button").should('contain.text', 'Login In')
    })
    it("wrong login test", () => {
        cy.get("input[placeholder=\"Enter your email\"]").type("wrong@gmail.com");
        cy.get("input[placeholder=\"Enter your password\"]").type("password");
        cy.get("button").click();
        cy.get("div").should("contain.text","Incorrect email or password!")
    })
 
    it("success login test", () => {
        cy.get("input[placeholder=\"Enter your email\"]").type("test@gmail.com");
        cy.get("input[placeholder=\"Enter your password\"]").type("password");
        cy.get("button").click();
        cy.get("div").should("contain.text","Login successful. You are being redirected");
        cy.url().should('include', '/dashboard')
    })
})