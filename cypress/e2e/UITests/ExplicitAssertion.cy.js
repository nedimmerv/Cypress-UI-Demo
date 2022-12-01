describe("Explicit Assertion", () => {
  it("", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username']").type("Admin"),
      cy.get("input[placeholder='Password']").type("admin123"),
      cy.get("button[type='submit']").click();

    let expName = "    w Collings";
    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();

      // BDD Style Assertion
      expect(actName).to.eq(expName);

      // TDD Style
      assert.equal(actName, expName);
    });
  });
});
