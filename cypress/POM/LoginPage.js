class Login {
  textUserName = "input[placeholder='Username']";
  textPassword = "input[placeholder='Password']";
  btnSubmit = "button[type='submit']";
  textDashboard = ".oxd-topbar-header-breadcrumb > .oxd-text";
  setUserName(username) {
    cy.get(this.textUserName).type(username);
  }

  setPassword(password) {
    cy.get(this.textPassword).type(password);
  }
  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }
  verifyLogin() {
    cy.get(this.textDashboard).should("have.text", "Dashboard");
  }
}
export default Login;
