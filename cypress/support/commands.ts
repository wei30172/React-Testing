import "@testing-library/cypress/add-commands";

Cypress.Commands.add("login", () => {
  // authenticate

  // go to todo page
  cy.visit("http://localhost:3000/todo");
});
