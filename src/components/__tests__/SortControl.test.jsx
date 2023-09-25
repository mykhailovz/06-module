import { expect, test } from 'vitest';
import { render } from '@testing-library/react';

import SortControl from '../SortControl';

test('should display correctly sort by component', async () => {
  const sortByList = ['Release Date', 'Title'];
  const sortControlComponent = render(
    <SortControl />
  );

  const sortByListElement = await sortControlComponent.findByTestId('sort-by-list');

  for (let i = 0; i < sortByListElement.children.length; i += 1) {
    const textContent = sortByListElement.children[i].textContent;
    console.log('textContent', textContent)
    expect(textContent).toEqual(sortByList[i]);
  }
});
