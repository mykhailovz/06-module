/// <reference types="Cypress" />

describe('search-form component', () => {
  it('should focus input and type movie name', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-testid="search-input"]').focus().clear();
    cy.get('[data-testid="search-input"]').type('Movie to search');

    cy.get('[data-testid="search-button"]').click();
  });
});
