import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';

import GenresSelect from '../GenreSelect';

test('display passed value', async () => {
  const genresList = [
    { id: '13a5fa3c-47e2-11ee-be56-0242ac120002', name: 'all' },
    { id: '13a5fd16-47e2-11ee-be56-0242ac120002', name: 'documentary' },
    { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' },
    { id: '13a60036-47e2-11ee-be56-0242ac120002', name: 'horror' },
    { id: '13a6063a-47e2-11ee-be56-0242ac120002', name: 'crime' }
  ];

  const genresListComponent = render(<GenresSelect genres={genresList} />);
  const genresListElement = await genresListComponent.findByTestId('genres-list');

  for (let i = 0; i < genresListElement.children.length; i++) {
    const liElement = genresListElement.children[i];
    const genre = genresList[i];

    expect(liElement.textContent).toEqual(genre.name);
  }
  genresListComponent.unmount();
});

test('display passed value - show highlighted genre', async () => {
  const activeClassName = 'bg-gray-400';
  const defaultGenre = { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' };
  const genresList = [
    { id: '13a5fa3c-47e2-11ee-be56-0242ac120002', name: 'all' },
    { id: '13a5fd16-47e2-11ee-be56-0242ac120002', name: 'documentary' },
    { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' },
    { id: '13a60036-47e2-11ee-be56-0242ac120002', name: 'horror' },
    { id: '13a6063a-47e2-11ee-be56-0242ac120002', name: 'crime' }
  ];

  const genresListComponent = render(<GenresSelect genre={defaultGenre} genres={genresList} />);
  const genresListElement = await genresListComponent.findByTestId('genres-list');

  const selectedElement = [...genresListElement.children].find(el => el.textContent === defaultGenre.name);
  expect(selectedElement.className).toEqual(activeClassName);
  genresListComponent.unmount();
});

test('onSelect prop is called with proper value - when choose all genre', async() => {
  const onSelect = vi.fn();

  const genre = { id: '13a5fa3c-47e2-11ee-be56-0242ac120002', name: 'all' };
  const genresList = [
    { id: '13a5fa3c-47e2-11ee-be56-0242ac120002', name: 'all' },
    { id: '13a5fd16-47e2-11ee-be56-0242ac120002', name: 'documentary' },
    { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' },
    { id: '13a60036-47e2-11ee-be56-0242ac120002', name: 'horror' },
    { id: '13a6063a-47e2-11ee-be56-0242ac120002', name: 'crime' }
  ];

  const genresListComponent = render(<GenresSelect genres={genresList} onSelect={onSelect} />);
  const genresListElement = await genresListComponent.findByTestId('genres-list');
  const selectedElement = [...genresListElement.children].find(el => el.textContent === genre.name);
  selectedElement.click();
  
  expect(onSelect).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenLastCalledWith(genre);
  genresListComponent.unmount();
});
