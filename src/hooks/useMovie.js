import { useEffect, useState } from 'react';

export default function useMovie(movieId) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovieById() {
      const response = await fetch(`http://localhost:4000/movies/${movieId}`);
      const movie = await response.json();
      setMovie(movie);
    }
    getMovieById();
  }, [movieId]);

  return [movie];
}
