describe("File Uploads", () => {
  it("Single File upload", () => {
    cy.visit("http://the-internet.herokuapp.com/upload");

    cy.get("#file-upload").attachFile("AWS.PNG");
    cy.wait(3000);
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    // attachFile() reads the file from Fixtures folder
    // cypress/support/commands.js like this:
    //import 'cypress-file-upload';
  });

  it("File upload -Rename", () => {
    cy.visit("http://the-internet.herokuapp.com/upload");

    cy.get("#file-upload").attachFile({
      filePath: "AWS.PNG",
      fileName: "cloudimage.png",
    });
    cy.wait(3000);
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it("File upload Drag and Drop", () => {
    cy.visit("http://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("myTest1.pdf", {
      subjectType: "drag-n-drop",
    });
    cy.wait(2000);
    cy.get(
      "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
    ).contains("myTest1.pdf");
  });

  it("Multiple File upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["myTest1.pdf", "myTest2.pdf"]);
    cy.wait(3000);
    cy.get(":nth-child(6)>strong").should(
      "contain.text",
      "Files You Selected:"
    );
  });
  it(" File upload - Shadow Dom", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );
    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
      "AWS.PNG"
    );

    cy.get(".smart-item-name", { includeShadowDom: true }).contains("AWS.PNG");
  });
});
