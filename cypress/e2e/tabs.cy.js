/// <reference types="Cypress" />

describe('comedies list', () => {
  it('should successfully show comedies - default page & sort', () => {
    cy.visit('http://localhost:5173/');

    cy.get(':nth-child(1) > .py-4 > [data-testid="movie-title"]').contains('Deadpool');
    cy.get(':nth-child(2) > .py-4 > [data-testid="movie-title"]').contains('Worry');
    cy.get(':nth-child(3) > .py-4 > [data-testid="movie-title"]').contains('Gaston Lagaffe');
  });

  it('should successfully show documentary', () => {
    cy.visit('http://localhost:5173/');
    cy.get(':nth-child(2) > .mr-4').click();

    cy.get(':nth-child(1) > .py-4 > [data-testid="movie-title"]').contains('Pandas');
    cy.get(':nth-child(2) > .py-4 > [data-testid="movie-title"]').contains('Het is gezien');
    cy.get(':nth-child(3) > .py-4 > [data-testid="movie-title"]').contains('Parallel Love')
  });

  it('should successfully show all - sort by title', () => {
    cy.visit('http://localhost:5173/');
    cy.get(':nth-child(1) > .mr-4').click();
    cy.get('.m-1').click();
    cy.get('[data-testid="sort-by-list"] > :nth-child(2) > a').click();

    cy.get(':nth-child(1) > .py-4 > [data-testid="movie-title"]').contains('Zulu');
    cy.get(':nth-child(2) > .py-4 > [data-testid="movie-title"]').contains('Zootopia');
    cy.get(':nth-child(3) > .py-4 > [data-testid="movie-title"]').contains('Zombieland')
  });
});
