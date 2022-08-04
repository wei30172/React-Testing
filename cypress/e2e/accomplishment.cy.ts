describe("accomplishment", () => {
  /*
    add accomplishment
    see success page
    back to accomplishments page
  */
  beforeEach(() => {
    cy.login("/accomplishment");
  })

  it("user can add accomplishments, and see success page", () => {
    cy.get('[data-cy="accomplishment-title-input"]').type("Accomplishment Title");
    cy.get('[data-cy="accomplishment-input"]').type("Accomplishment Content");
    cy.findByText(/submit/i).click();
    // cy.contains("Submit").click();
    cy.findByText(/Complete the items above to continue/i).should("exist");
    // cy.contains("Complete the items above to continue").should("be.visible");

    cy.get('[data-cy="accomplishment-checkbox"]').click();
    // cy.get("[type='checkbox']").click();
    cy.findByText(/submit/i).click();
    cy.wait(2000);
    cy.findByText(/Submitted Successfully/i).should("exist");

    cy.findByText(/Add more accomplishments./i).click();
    cy.get('[data-cy="accomplishment-title-input"]').should("be.empty");
    cy.get('[data-cy="accomplishment-input"]').should("be.empty");
    cy.get('[data-cy="accomplishment-checkbox"]').should("not.be.checked");
  })
})