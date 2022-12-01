describe("handling iframes", () => {
  it("Approach 1", () => {
    cy.visit("http://the-internet.herokuapp.com/iframe");

    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body") // 0 index of iframe
      .should("be.visible")
      .then(cy.wrap);

    iframe.clear().type("welcome to iframe  {ctrl+a}");
    cy.wait(1000);

    cy.get("[aria-label='Bold']").click();
    cy.wait(1000);
    cy.get("[aria-label='Italic']").click();
    cy.wait(1000);
  });

  it("Approach 2 by using custom command from command.js", () => {
    cy.visit("http://the-internet.herokuapp.com/iframe");

    cy.getIframe("#mce_0_ifr").clear().type("welcome to iframe  {ctrl+a}");
    cy.wait(1000);

    cy.get("[aria-label='Bold']").click();
    cy.wait(1000);
    cy.get("[aria-label='Italic']").click();
    cy.wait(1000);
  });

  // to install Iframe plugin execute this: npm install -D cypress-iframe from terminal
  it.only("Approach 3 by using Cypress Iframe Plugin", () => {
    cy.visit("http://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr"); // this will load the frame

    cy.iframe("#mce_0_ifr").clear().type("Iframe with plugin option {ctrl+a}");
    cy.get("[aria-label='Bold']").click();
    cy.wait(1000);
    cy.get("[aria-label='Italic']").click();
    cy.wait(1000);
  });
});

// https://www.youtube.com/watch?v=CTpSOW-oL7k&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=11

// If applicaiton has multiple Iframes we can create a custom method to handle them
// Under Support Folder command.js
/*
Cypress.Commands.add("getIframe", (iframe) => {
  return cy
    .get(iframe)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});
*/
