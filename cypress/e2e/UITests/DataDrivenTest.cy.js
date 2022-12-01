describe("Data Driven Test Suite", () => {
  it("Data Driven Test 1", () => {
    cy.fixture("orangehrm1.json").then((data) => {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      data.forEach((userdata) => {
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();

        if (userdata.username == "Admin" && userdata.password == "admin123") {
          cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
            "have.text",
            userdata.expected
          );
          // To Logout after successful Login
          cy.get("p[class='oxd-userdropdown-name']").click();
          cy.wait(2000);
          cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
        } else {
          cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should(
            "have.text",
            userdata.expected
          );
        }
      });
    });
  });
});
