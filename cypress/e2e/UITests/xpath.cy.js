describe("Test Using Xpath ", () => {
  it("Test 1 google Seacrh", () => {
    cy.visit("www.google.com");
    cy.xpath("//*[text()='Aceptar todo']").click();
    cy.title().should("eq", "Google");
    cy.xpath("//*[@name='q']").type("Java ").type("{Enter}");
    cy.wait(3000);
  });
});
