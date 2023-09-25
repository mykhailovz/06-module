/// <reference types="Cypress" />

describe('genre-select component', () => {
  it('comedy genre should not be active because of click on documentary', () => {
    cy.visit('http://localhost:5173/');

    cy.get(':nth-child(2) > .mr-4').click();
    cy.get(':nth-child(3) > .mr-4').should('not.have.class', 'bg-gray-400')
  });
});
