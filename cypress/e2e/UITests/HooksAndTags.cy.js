// before
// after
// beforeEach
// afterEach

// Tags skip ,only

describe("My Test Suite Hooks and Tags", () => {
  before(() => {
    cy.log("********* Launch App ********");
  });

  after(() => {
    cy.log("********* Close App ********");
  });

  beforeEach(() => {
    cy.log("********* Login ********");
  });

  afterEach(() => {
    cy.log("********* Logout ********");
  });
  it("test 1", () => {
    cy.log("********* test 1 ********");
  });

  it("test 2", () => {
    cy.log("********* test 2 ********");
  });

  it("test 3", () => {
    cy.log("********* test 3 ********");
  });
});
