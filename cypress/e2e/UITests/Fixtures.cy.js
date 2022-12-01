describe("My Test Suite", () => {
  it("Orange HRM Login without fixture file", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "have.text",
      "Dashboard"
    );
  });
  it("Fixture Demo Test with File from fixture", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    cy.fixture("orangehrm").then((data) => {
      cy.get("input[placeholder='Username']").type(data.username);
      cy.get("input[placeholder='Password']").type(data.password);
      cy.get("button[type='submit']").click();
      cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
        "have.text",
        data.expected
      );
    });
  });

  // If we need to use data multiple times we create HOOK method
  let userdata;
  before(() => {
    cy.fixture("orangehrm").then((data) => {
      userdata = data;
    });
  });

  it("Fixture Demo with Hook", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[placeholder='Username']").type(userdata.username);
    cy.get("input[placeholder='Password']").type(userdata.password);
    cy.get("button[type='submit']").click();
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "have.text",
      userdata.expected
    );
  });
});
