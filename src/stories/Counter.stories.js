import Counter from '../components/Counter';

export default {
  title: 'MovieApp/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: 222
  },
};

export const CounterWithDefaultZero = {
  args: {

  }
};

export const CounterWithPassedValue = {
  args: {
    value: 3333
  }
};
