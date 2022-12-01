describe("Screenhots", () => {
  it("Screenshots", () => {
    cy.visit("www.google.com");
    cy.xpath("//*[text()='Aceptar todo']").click();
    cy.screenshot("main_page");

    cy.get("img[class='lnXdpd']").screenshot("google_image");
  });
});
