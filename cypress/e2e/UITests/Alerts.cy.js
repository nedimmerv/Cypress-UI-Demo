describe("Alerts", () => {
  //Javascript Alert, it will have some text and an 'OK' button
  // Cypress handles with Alert, alert window is closed automatically by cypress
  //if we want to verify text or button we use (window:alert)
  it("Javascript Alerts", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("I am a JS Alert");
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
  // Javascript confirm Alert YES or NO
  it("JS Confirm Alert - OK", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (text) => {
      expect(text).to.contains("I am a JS Confirm");
    });
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("JS Confirm Alert - Cancel", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (text) => {
      expect(text).to.contains("I am a JS Confirm");
    });
    // To click on Cancel or NO we use cy.on('window:confirm',()=>false)
    cy.on("window:confirm", () => false); // cypress closes alert window using cancel btn
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });
  // Javascript Pormpt Alert
  it("JS Prompt Alert", () => {
    cy.visit("http://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("welcome");
    });
    cy.get("button[onclick='jsPrompt()']").click();
    cy.get("#result").should("have.text", "You entered: welcome");
  });

  //Authenticated Alert
  it("Authenticated alert", () => {
    // Approach 1
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });

    cy.get("div[class='example'] p").should("have.contain", "Congratulations");
  });

  it.only("Authenticated alert", () => {
    // Approach 2 add Username and Password to URL
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    cy.get("div[class='example'] p").should("have.contain", "Congratulations");
  });
});
