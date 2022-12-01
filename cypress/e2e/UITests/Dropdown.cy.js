describe("Dropdown Test cases", () => {
  it("Dropdown with Select tag", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    cy.get("#zcf_address_country")
      .select("Turkey")
      .should("have.value", "Turkey");
  });

  it("Auto suggest dropdown", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("Hitachi");
    cy.get(".suggestion-title").contains("Hitachi").click();
  });

  it("Dynamic dropdown", () => {
    cy.visit("www.google.com");
    cy.xpath("//*[text()='Aceptar todo']").click();
    cy.title().should("eq", "Google");
    cy.xpath("//*[@name='q']").type("hitachi");
    cy.wait(3000);

    cy.get("div.wM6W7d>span").each(($el, index, $list) => {
      if ($el.text() == "hitachi tv") {
        cy.wrap($el).click();
      }
    });
    cy.get("input[name='q']").should("have.value", "hitachi tv");
  });
});
