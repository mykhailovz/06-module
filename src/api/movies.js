async function fetchMovies(path, setStatus, setMovies, abortController) {
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

export function getMovies(genre, searchQuery, sortBy, setStatus, setMovies) {
  setStatus('loading');
  const abortController = new AbortController();

  let path = 'movies';
  if (genre === 'all' && !searchQuery) {
    path += `?sortBy=${sortBy}&sortOrder=desc`
  } else if (searchQuery) {
    path += `?search=${searchQuery}&searchBy=title`
  } else {
    path += `?searchBy=genres&filter=${genre}&sortBy=${sortBy}&sortOrder=desc`;
  }

  fetchMovies(path, setStatus, setMovies, abortController);

  return abortController;
}
