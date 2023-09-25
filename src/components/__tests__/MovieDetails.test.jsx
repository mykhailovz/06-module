import { expect, test } from 'vitest';
import { render } from '@testing-library/react';

import MovieDetails from '../MovieDetails';

test('should correctly display movie details', async () => {
  const movie =     {
    id: '2461b6ba-5091-11ee-be56-0242ac120002',
    title: 'Pulp Fiction',
    rating: 8.9,
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    duration: '2h 34m',
    genres: ['Drama', 'Biography', 'Music', 'Crime'],
    releaseDate: 1994,
    image: 'https://flxt.tmsimg.com/assets/p15684_p_v13_an.jpg'
  };

  const movieDetailsComponent = render(
    <MovieDetails movie={movie} />
  );
  const movieImageElement = await movieDetailsComponent.findByTestId('movie-image');
  const movieDescriptionElement = await movieDetailsComponent.findByTestId('movie-description');

  expect(movieImageElement.src).toEqual(String(movie.image));
  expect(movieDescriptionElement.textContent).toEqual(movie.description)
});
