describe("Handle tabs", () => {
  it("Approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");

    //  <div class="example"  <a href="/windows/new" ,="" target="_blank">Click Here</a>
    // to avoid to open a new tab , we use invoke() method to remove attribute
    cy.get(".example > a").invoke("removeAttr", "target").click();
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.go("back"); // to back to parent tab
    cy.url().should("include", "https://the-internet.herokuapp.com/windows");
  });

  it("Approach 2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");

    //  <div class="example"  <a href="/windows/new" ,="" target="_blank">Click Here</a>
    // to avoid to open a new tab , we use invoke() method to remove attribute
    // https://www.youtube.com/watch?v=TgLRQhw3GDM&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=10
    cy.get(".example > a").then((e) => {
      let url = e.prop("href");
      cy.visit(url);
    });
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );
    cy.go("back"); // to back to parent tab
    cy.url().should("include", "https://the-internet.herokuapp.com/windows");
  });
});
