// <reference types="../support"/>

describe("todos", () => {
  // add todo
  // delete a todo
  // check todo
  // todo count values
  beforeEach(() => {
    cy.login();
  })

  it("user can add, check and delete todos", () => {
    cy.findByRole("textbox")
      .type("todo1")
      .type("{enter}");
    
    cy.wait(1000);

    cy.findByRole("textbox")
      .type("todo2")
      .type("{enter}");

    cy.findByText(/todo1/i).should('exist');
    cy.findByText(/todo2/i).should('exist');
    cy.findByText(/Total Todos: 202/i).should('exist');

    cy.findByRole('checkbox', { name: /todo2/i }).check();
    cy.findByText(/Completed Todos: 91/i).should('exist');

    cy.get("[data-cy=todo-todo1]").within(() => {
      cy.findByRole("button").click();
    });

    cy.findByText(/todo1/i).should("not.exist");
  })
})