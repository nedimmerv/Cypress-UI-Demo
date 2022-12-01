describe("Tables", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get(".btn.btn-primary").click();
    cy.get(".btn-close").click();
    // click on Customers side bar
    cy.get("#menu-customer").click();
    cy.wait(1000);
    cy.get("#menu-customer>ul>li:first-child").click();
  });

  it("check no of rows and columns", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
      "have.length",
      "10"
    );
    cy.get(
      "table[class='table table-bordered table-hover']>thead>tr>td"
    ).should("have.length", "7");
  });

  it("Check cell data from specific row and table", () => {
    cy.get(
      "#form-customer > div.table-responsive > table > tbody > tr:nth-child(8) > td:nth-child(3)"
    ).contains("Kethy@yopmail.com");
  });
  it("Read data from each and every row", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });

  it.only("Pagination ", () => {
    // findinf total no of pages
    let totalPages;
    cy.get(".col-sm-6.text-end").then((e) => {
      let mytext = e.text(); // Showing 1 to 10 of 7398 (740 Pages)
      totalPages = mytext.substring(
        mytext.indexOf("(") + 1,
        mytext.indexOf("Pages") - 1
      );
      cy.log("<------ total number of pages in the table----->" + totalPages);
      let totalpage = 10;
      for (let p = 1; p <= totalpage; p++) {
        if (totalpage > 1) {
          cy.log("Active page is === " + p);
          cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
          cy.wait(1000);

          cy.get(
            "table[class='table table-bordered table-hover']>tbody>tr"
          ).each(($row) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((e) => {
                cy.log(e.text());
              });
            });
          });
        }
      }
    });
  });
});
