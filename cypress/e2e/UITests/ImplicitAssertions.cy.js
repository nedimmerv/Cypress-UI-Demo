describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    // implicit assertion : "Should" and "and"
    cy.visit("https://www.google.com");
    cy.url().should("eq", "https://www.google.com/");
    cy.url().should("include", "www.google.com");
    cy.url().should("contain", "goog");
  });

  it("Implicit assertions chaining should", () => {
    cy.visit("https://www.google.com");
    cy.url()
      .should("eq", "https://www.google.com/")
      .should("include", "www.google.com")
      .should("contain", "goog");
  });

  it("Implicit assertions chaining usind and", () => {
    cy.visit("https://www.google.com");
    cy.url()
      .should("eq", "https://www.google.com/")
      .and("include", "www.google.com")
      .and("contain", "goog");
  });

  it("Implicit assertions chaining  negative testing using not", () => {
    cy.visit("https://www.google.com");
    cy.url()
      .should("not.eq", "https://www.gmail.com/")
      .and("not.include", "www.gmail.com")
      .and("not.contain", "amaz");
  });

  it("Implicit assertions title", () => {
    cy.visit("https://www.google.com");
    cy.title()
      .should("eq", "Google")
      .and("include", "oogle")
      .and("contain", "Goog");

    cy.xpath("//*[text()='Aceptar todo']").click();
    cy.get(".lnXdpd").should("be.visible");
    cy.get(".lnXdpd").should("exist");

    cy.get(".lnXdpd").should("be.visible").should("exist");
    cy.xpath("//a").should("have.length", 27);
    cy.xpath("//*[@name='q']").type("Java");
    cy.xpath("//*[@name='q']").should("have.value", "Java");
  });
});
