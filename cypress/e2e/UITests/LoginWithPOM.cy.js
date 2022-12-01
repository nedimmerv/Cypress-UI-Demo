import Login from "../../POM/LoginPage.js";

describe("Login with POM", () => {
  it("Login", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    const login = new Login();
    login.setUserName("Admin");
    login.setPassword("admin123");
    login.clickSubmit();
    login.verifyLogin();
  });

  it("Login using pom with fixture", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.fixture("orangehrm").then((data) => {
      const login = new Login();
      login.setUserName(data.username);
      login.setPassword(data.password);
      login.clickSubmit();
      login.verifyLogin();
    });
  });
});
