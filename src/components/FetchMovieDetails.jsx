import { useParams } from 'react-router-dom';
import useMovie from '../hooks/useMovie.js';

import MovieDetails from './MovieDetails.jsx';

export default function FetchMovieDetails() {
  const { movieId } = useParams();
  const [movie] = useMovie(movieId);

  return (
    <>
      <MovieDetails movie={movie} />
    </>
  );
}
