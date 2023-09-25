import MovieForm from '../components/MovieForm';

export default {
  title: 'MovieApp/MovieForm',
  component: MovieForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const MovieFormNoDataPassed = {
  args: {

  }
};

export const MovieFormWithPassedData = {
  args: {
    movie: {
      id: '2461b6ba-5091-11ee-be56-0242ac120002',
      title: 'Pulp Fiction',
      rating: 8.9,
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      duration: '2h 34m',
      genres: ['Drama', 'Biography', 'Music', 'Crime'],
      releaseDate: '1994-11-14T09:49:14.171Z',
      image: 'https://flxt.tmsimg.com/assets/p15684_p_v13_an.jpg'
    }
  }
};
