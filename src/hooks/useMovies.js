import { useEffect, useState } from 'react';

import { getMovies } from '../api/movies';

export default function useMovies(genre, searchQuery, sortBy) {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    const abortController = getMovies(genre, searchQuery, sortBy, setStatus, setMovies);

    return () => {
      abortController.abort()
    };
  }, [genre, searchQuery, sortBy]);

  return [movies, status];
}

