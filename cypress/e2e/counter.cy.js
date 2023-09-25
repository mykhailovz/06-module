/// <reference types="Cypress" />

describe('counter component', () => {
  it('should increase counter value', () => {
    const counterValueAfterIncrease = 11;

    cy.visit('http://localhost:5173/');

    cy.get('[data-testid="increase"]').click();

    cy.get('[data-testid="counter-value"]').contains(counterValueAfterIncrease);
  });
});
