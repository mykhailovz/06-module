import { useEffect, useState } from 'react';

export default function useMovies(genre, searchQuery, sortBy) {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    getMovies(genre, searchQuery, sortBy)
  }, [genre, searchQuery, sortBy]);

  async function getMovies(genre, searchQuery, sortBy) {
    setStatus('loading');
    const abortController = new AbortController();

    let path = 'movies';
    if (genre.name === 'all' && !searchQuery) {
      path += `?sortBy=${sortBy}&sortOrder=desc`
    } else if (searchQuery) {
      path += `?search=${searchQuery}&searchBy=title`
    } else {
      path += `?searchBy=genres&filter=${genre.name}&sortBy=${sortBy}&sortOrder=desc`;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/${path}`,
        {
          signal: abortController.signal
        }
      );
      const moviesResponse = await response.json();
      setMovies(moviesResponse.data);
      setStatus('loaded');
    } catch (error) {
      console.error('error happened: ', error);
      setMovies([]);
    }
  }

  return [movies, status];
}

