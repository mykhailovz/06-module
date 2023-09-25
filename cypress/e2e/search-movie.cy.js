/// <reference types="Cypress" />

describe('search form', () => {
  it('should find only 1 movie - pandas', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-testid="search-input"]').type('Pandas');
    cy.get('[data-testid="search-button"]').click();
    cy.get('#root > :nth-child(4)').contains('1 movies found');
  });
});
