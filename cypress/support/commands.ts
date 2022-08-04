import "@testing-library/cypress/add-commands";

Cypress.Commands.add("login", (url: string) => {
  // authenticate

  // go to todo page
  cy.visit(url);
});
