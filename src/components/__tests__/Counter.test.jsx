import { expect, test } from 'vitest';
import { render } from '@testing-library/react';

import Counter from '../Counter';

test('display zero - value is not passed', async () => {
  const counterComponent = render(<Counter />);

  const counterElement = await counterComponent.findByTestId('counter-value');
  expect(counterElement.textContent).toEqual('0');
  counterComponent.unmount();
});

test('display a passed value', async () => {
  const defaultCounterValue = 111;

  const counterComponent = render(
    <Counter value={defaultCounterValue} />
  );

  const counterElement = await counterComponent.findByTestId('counter-value');
  expect(counterElement.textContent).toEqual(defaultCounterValue.toString());
  counterComponent.unmount();
});

test('display increased value', async () => {
  const defaultCounterValue = 10;
  const increasedValue = defaultCounterValue + 1;

  const counterComponent = render(
    <Counter value={defaultCounterValue} />
  );

  const increaseButton = await counterComponent.findByTestId('increase');
  increaseButton.click();
  const counterElement = await counterComponent.findByTestId('counter-value');

  expect(counterElement.textContent).toEqual(increasedValue.toString());
  counterComponent.unmount();
});

test('display decreased value', async () => {
  const defaultCounterValue = 10;
  const increasedValue = defaultCounterValue - 1;

  const counterComponent = render(
    <Counter value={defaultCounterValue} />
  );

  const increaseButton = await counterComponent.findByTestId('decrease');
  increaseButton.click();
  const counterElement = await counterComponent.findByTestId('counter-value');

  expect(counterElement.textContent).toEqual(increasedValue.toString());
  counterComponent.unmount();
});
