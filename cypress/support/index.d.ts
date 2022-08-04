/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.login("http://localhost:3000/todos")
     */
     login(url: string): Chainable<Element>;
  }
}