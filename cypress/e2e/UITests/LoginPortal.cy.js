describe("Data Driven Test Suite", () => {
  it("Login to HICSE Portal ", () => {
    cy.fixture("HicseLoginUsers.json").then((data) => {
      cy.visit("http://hx-fe-qa.uksouth.cloudapp.azure.com:3000/");
      data.forEach((userdata) => {
        cy.get("#hvinput2-input").clear();
        cy.get("#hvinput2-input").type(userdata.userEmail);
        cy.get("#hvinput4-input").clear();
        cy.get("#hvinput4-input").type(userdata.password);
        cy.get(".MuiButton-label").click();

        if (
          userdata.userEmail == "qa.admin@hitachivantara.com" ||
          userdata.userEmail == "qa.teacher@hitachivantara.com" ||
          (userdata.userEmail == "qa.trainee@hitachivantara.com" &&
            userdata.password == "test123")
        ) {
          cy.get(
            ".HvHeaderMenuItem-selectedItem > .HvHeaderMenuItem-button > .HvTypography-root"
          ).should("have.text", userdata.expected);
          // To Logout after successful Login
          cy.get(
            ".MuiButton-label > .HvAvatar-container > .HvAvatar-status > .MuiAvatar-root"
          ).click();
          cy.wait(1000);
          cy.get(
            '[data-cy="signOut"] > .MuiButton-label > .HvTypography-root'
          ).click();
        } else {
          cy.contains(userdata.expected);
        }
      });
    });
  });
});
