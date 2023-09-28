import { useParams } from 'react-router-dom';
import useMovie from '../hooks/useMovie.js';

import MovieDetails from './MovieDetails.jsx';

export default function FetchMovieDetails() {
  const { id } = useParams();
  const [movie] = useMovie(id);

  return (
    <>
      <MovieDetails movie={movie} />
    </>
  );
}
