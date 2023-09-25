/// <reference types="Cypress" />

describe('counter component', () => {
  it('should increase counter value', () => {
    cy.visit('http://localhost:5174/');

    cy.get(':nth-child(1) > .bg-blue-500').click(); 

    cy.get('#title').type('Movie title');
    cy.get('#movieUrl').type('https://movie.com/path');
    cy.get('#rating').type('8.9');
    cy.get('#genre').select('Comedy');
    cy.get('#runtime').type('2h 14m');
    cy.get('#overview').type('Some movie description about the movie');

    // click on submit
    cy.get('#submit-movie-form').click();

    // click on close form button
    // cy.get('#add-movie > .modal-box > :nth-child(1) > [data-testid="close-movie-form"]').click();

    cy.get('#add-movie').should('not.be.visible');
  });
});
