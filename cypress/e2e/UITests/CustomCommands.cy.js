describe("custom Commands", () => {
  it("Handling Links", () => {
    cy.visit("https://demo.nopcommerce.com/notebooks");
    // Using Custom Command from command.js file
    // click on link using label command
    cy.clickLink("Apple MacBook Pro 13-inch");
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });
  it("Overwriting existing command", () => {
    // overwriting existing contains() command
    cy.visit("https://demo.nopcommerce.com/notebooks");

    cy.clickLink("APPLE MACBOOK Pro 13-inch");
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });

  it.only("Login with Custom command", () => {
    cy.visit("https://demo.nopcommerce.com/");
    cy.clickLink("Log in"); // Custom command to click on link
    cy.wait(3000);
    cy.loginApp("mervimtr@gmail.com", "test123");
  });
});
