import GenreSelect from '../components/GenreSelect';

export default {
  title: 'MovieApp/GenreSelect',
  component: GenreSelect,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const genresList = [
  { id: '13a5fa3c-47e2-11ee-be56-0242ac120002', name: 'all' },
  { id: '13a5fd16-47e2-11ee-be56-0242ac120002', name: 'documentary' },
  { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' },
  { id: '13a60036-47e2-11ee-be56-0242ac120002', name: 'horror' },
  { id: '13a6063a-47e2-11ee-be56-0242ac120002', name: 'crime' }
];

export const NoGenreSelected = {
  args: {
    genres: genresList
  }
};

export const ComedyGenreSelected = {
  args: {
    genre: { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' },
    genres: genresList
  }
};

export const DocumentaryGenreSelected = {
  args: {
    genre: { id: '13a5fd16-47e2-11ee-be56-0242ac120002', name: 'documentary' },
    genres: genresList
  }
};
