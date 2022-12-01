describe("google Search Test", () => {
  it("Search for Cypress", () => {
    cy.visit("/");
    cy.xpath("//*[text()='Aceptar todo']").click();
    cy.get("[name=q]").type("Cypress");
  });
});
