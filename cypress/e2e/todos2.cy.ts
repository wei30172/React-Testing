describe("todos2", () => {
  /*
    model pop up
    add todo
    toggle todo
  */
  beforeEach(() => {
    cy.login("/todos2");
  })

  it("user can add and delete todos", () => {
    cy.findByRole("button", { name: /add/i }).click();
    cy.findByRole('heading', { name: /add a new todo/i }).should('exist');
    
    cy.findByRole('textbox').type("todo1");
    cy.get('[type="submit"]').should('exist');
    cy.findByRole('button', { name: /save/i }).click();
    cy.findByText(/todo1/i).should('exist');

    cy.findByRole("button", { name: /add/i }).click();
    cy.findByRole('button', { name: /close/i }).click();
    cy.findByRole('heading', { name: /add a new todo/i }).should('not.exist');

    cy.get("[data-cy=todo-todo1]").click();
    cy.get(".todoCard_completion_done").should("exist");
    cy.get("[data-cy=todo-todo1]").click();
    cy.get(".todoCard_completion_done").should("not.exist");
  })
})