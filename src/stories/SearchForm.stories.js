import SearchForm from '../components/SearchForm';

export default {
  title: 'MovieApp/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const NoValueInSearchForm = {
  args: {

  }
};

export const PassedValueInSearchForm = {
  args: {
    defaultSearchQuery: 'Test Movie'
  }
};
