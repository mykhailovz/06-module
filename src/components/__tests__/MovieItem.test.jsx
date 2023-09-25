import { expect, test } from 'vitest';
import { render } from '@testing-library/react';

import MovieItem from '../MovieItem';

test('should correctly display movie item', async () => {
  const movie = {
    id: '2461b9b2-5091-11ee-be56-0242ac120003',
    title: 'Monarch: Legacy of Monsters',
    rating: null,
    description: 'Set after the battle between Godzilla and the Titans, revealing that monsters are real, follows one family\'s journey to uncover its buried secrets and a legacy linking them to Monarch.',
    duration: '1h 10m',
    genres: ['Action & Adventure', 'Sci-fi'],
    releaseDate: 2023,
    image: 'https://fictionhorizon.com/wp-content/uploads/2023/09/monarch-legacy-of-monsters-release-date-and-time.jpg'
  };

  const movieItemComponent = render(
    <MovieItem movie={movie} />
  );
  const movieTitleElement = await movieItemComponent.findByTestId('movie-title');
  const movieReleaseDateElement = await movieItemComponent.findByTestId('movie-release-date');

  expect(movieTitleElement.textContent).toEqual(String(movie.title));
  expect(movieReleaseDateElement.textContent).toEqual(String(movie.releaseDate));
});
