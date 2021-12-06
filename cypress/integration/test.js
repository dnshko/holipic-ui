describe("signup from", () => {
  it("Get the URL", () => {
    cy.visit("http://localhost:3000/");
  });
  it("click the signup button", () => {
    cy.contains("Register").click();
  });
  it("fill the form", () => {
    cy.get("#name").type("test");
    cy.get("#cName").type("test compony");
    cy.get("#cAddress").type("test address");
    cy.get("#phone").type("1234567890");
    cy.get("#email").type("test@gmail.com");
    cy.get("#password").type("password");
    cy.get("#package").click();
    cy.get('.MuiList-root > [tabindex="0"]').click();
    cy.get("#exampleCheck1").click();
    cy.contains("Sign Up").click();
  });
  it("Registration is complete popup", () => {
    cy.contains("Company Registration is complete!").should("be.visible");
  });
  // it("close the popup button", () => {
  //   cy.get(
  //     ".MuiButtonBase-root MuiIconButton-root Component-closeButton-26"
  //   ).click();
  // });
});
