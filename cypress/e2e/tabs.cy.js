/// <reference types="Cypress" />

describe('comedies list', () => {
  it('should successfully show comedies - default page & sort', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[href="/movies/383498?query=&genre=comedy&sortBy=release_date"] > .max-w-xs > .py-4 > [data-testid="movie-title"]').contains('Deadpool');
    cy.get('[href="/movies/443009?query=&genre=comedy&sortBy=release_date"] > .max-w-xs > .py-4 > [data-testid="movie-title"]').contains('Worry');
    cy.get('[href="/movies/469052?query=&genre=comedy&sortBy=release_date"] > .max-w-xs > .py-4 > [data-testid="movie-title"]').contains('Gaston Lagaffe');
  });

  it('should successfully show documentary', () => {
    cy.visit('http://localhost:5173/');
    cy.get(':nth-child(2) > .mr-4').click();

    cy.get('[href="/movies/497802?query=&genre=documentary&sortBy=release_date"] > .max-w-xs > .py-4 > [data-testid="movie-title"]').contains('Pandas');
    cy.get('[href="/movies/512686?query=&genre=documentary&sortBy=release_date"] > .max-w-xs > .py-4 > [data-testid="movie-title"]').contains('Het is gezien');
    cy.get('[href="/movies/485548?query=&genre=documentary&sortBy=release_date"] > .max-w-xs > .py-4 > [data-testid="movie-title"]').contains('Parallel Love');

    cy.location().should(loc => {
      expect(loc.search).to.eq('?query=&genre=documentary&sortBy=release_date');
    });
  });

  it('should successfully show all - sort by title', () => {
    cy.visit('http://localhost:5173/');
    cy.get(':nth-child(1) > .mr-4').click();
    cy.get('.m-1').click();
    cy.get('[data-testid="sort-by-list"] > :nth-child(2) > a').click();

    cy.get('[href="/movies/185567?query=&genre=all&sortBy=title"] > .max-w-xs > .py-4 > [data-testid="movie-title"]').contains('Zulu');
    cy.get('[href="/movies/269149?query=&genre=all&sortBy=title"] > .max-w-xs > .py-4 > [data-testid="movie-title"]').contains('Zootopia');
    cy.get('[href="/movies/19908?query=&genre=all&sortBy=title"] > .max-w-xs > .py-4 > [data-testid="movie-title"]').contains('Zombieland');

    cy.location().should(loc => {
      expect(loc.search).to.eq('?query=&genre=all&sortBy=title');
    });
  });
});
