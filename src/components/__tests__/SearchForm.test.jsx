import { expect, test, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import SearchForm from '../SearchForm';

test('display passed value', async () => {
  const defaultSearchQuery = 'Movie #1';

  const searchFormComponent = render(<SearchForm defaultSearchQuery={defaultSearchQuery} />);

  const searchInputElement = await searchFormComponent.findByTestId('search-input');

  expect(searchInputElement.value).toEqual(defaultSearchQuery);
  searchFormComponent.unmount();
});

test('onSearch prop is called with proper value when click button', async () => {
  const onSearch = vi.fn();
  const movieName = 'Movie #2';

  const searchFormComponent = render(<SearchForm onSearch={onSearch} />);
  const searchInputElement = await searchFormComponent.findByTestId('search-input');
  const searchButtonElement = await searchFormComponent.findByTestId('search-button');

  fireEvent.change(searchInputElement, { target: { value: movieName } });
  searchButtonElement.click();

  expect(onSearch).toHaveBeenCalledTimes(1);
  expect(onSearch).toHaveBeenCalledWith(movieName);

  searchFormComponent.unmount();
  onSearch.mockClear();
});

test.skip('onSearch prop is called with proper value when press Enter', async () => {
  const onSearch = vi.fn();
  const movieName = 'Movie #3';

  const searchFormComponent = render(<SearchForm onSearch={onSearch} />);
  const searchInputElement = await searchFormComponent.findByTestId('search-input');
  const searchInputLabel = await searchFormComponent.findByTestId('search-input-label');

  fireEvent.change(searchInputElement, { target: { value: movieName } });
  searchInputElement.focus()

  // fireEvent.keyDown(searchInputElement, {key: 'Enter', code: 'Enter', charCode: 13});
  // fireEvent.keyPress(searchInputElement, {key: 'Enter', code: 'Enter', charCode: 13});
  userEvent.type(searchInputLabel, "abc{enter}");

  // TODO: store data about calls => onSearch.mock.calls
  // expect(onSearch).toHaveBeenCalledTimes(1);
});
// google react testing library form press enter
// https://stackoverflow.com/questions/59362804/pressing-enter-to-submit-form-in-react-testing-library-does-not-work
