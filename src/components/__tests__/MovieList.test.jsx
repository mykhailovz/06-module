import { expect, test } from 'vitest';
import { render } from '@testing-library/react';

import MovieList from '../MovieList';

test('should correctly display movie list', async () => {
  const movies = [
    {
      id: '2461b6ba-5091-11ee-be56-0242ac120002',
      title: 'Pulp Fiction',
      rating: 8.9,
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      duration: '2h 34m',
      genres: ['Drama', 'Biography', 'Music', 'Crime'],
      releaseDate: 1994,
      image: 'https://flxt.tmsimg.com/assets/p15684_p_v13_an.jpg'
    },
    {
      id: '2461b9b2-5091-11ee-be56-0242ac120002',
      title: 'Bohemian Rhapsody',
      rating: 7.9,
      description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
      duration: '2h 14m',
      genres: ['Action & Adventure'],
      releaseDate: 2018,
      image: 'https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg'
    },
    {
      id: '2461b9b2-5091-11ee-be56-0242ac120003',
      title: 'Monarch: Legacy of Monsters',
      rating: null,
      description: 'Set after the battle between Godzilla and the Titans, revealing that monsters are real, follows one family\'s journey to uncover its buried secrets and a legacy linking them to Monarch.',
      duration: '1h 10m',
      genres: ['Action & Adventure', 'Sci-fi'],
      releaseDate: 2023,
      image: 'https://fictionhorizon.com/wp-content/uploads/2023/09/monarch-legacy-of-monsters-release-date-and-time.jpg'
    },
    {
      id: '2461b9b2-5091-11ee-be56-0242ac120004',
      title: 'Forrest Gump',
      rating: 8.8,
      description: 'The history of the United States from the 1950s to the \'70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.',
      duration: '2h 22m',
      genres: ['Drama', 'Romance'],
      releaseDate: 1994,
      image: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    },
  ];

  const movieListComponent = render(
    <MovieList movies={movies} />
  );

  const movieListElement = await movieListComponent.findByTestId('movie-list');
  expect(movieListElement.children.length).toEqual(movies.length);
});
