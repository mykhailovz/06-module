import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieList from '../components/MovieList.jsx';
import MovieDetails from '../components/MovieDetails.jsx';
import SearchForm from '../components/SearchForm.jsx';
import GenreSelect from '../components/GenreSelect.jsx';
import SortControl from '../components/SortControl.jsx';
import MovieCounter from '../components/MovieCounter.jsx';

import useMovies from '../hooks/useMovies.js';

const sortByOptions = {
  'Release Date': 'release_date',
  'Title': 'title'
};

function getGenres() {
  return [
    'all',
    'documentary',
    'comedy',
    'horror',
    'crime'
  ];
}

const defaultGenre = 'comedy';

export default function MovieListPage() {
  const [params, setSearchParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const genre = params.get('genre') ?? defaultGenre;
  const sortBy = params.get('sortBy') ?? sortByOptions["Release Date"];

  const genres = getGenres();

  const [movie, setMovie] = useState(null);
  const [movies] = useMovies(genre, query, sortBy);

  function onSelectMovie(movie) {
    console.log('[you select movie]: ', movie);
    setMovie(movie);
  }

  function onSearch(searchQuery) {
    console.log('[you just searched movie] : ', searchQuery);
    setSearchParams({ query: searchQuery })
  }

  function onGenreSelect(genre) {
    console.log('[you just select genre] : ', genre);
    setSearchParams({ query, genre, sortBy });
  }

  function onSortBySelect(selectedSortBy) {
    console.log('[you select sortBy]: ', selectedSortBy);
    setSearchParams({ query, genre, sortBy: sortByOptions[selectedSortBy] })
  }

  function onMovieDetailsSearchClick() {
    console.log('you click on movie details to search movies');
    setMovie(null);
  }

  return (
    <>
      {
        !movie && <SearchForm defaultSearchQuery={query} onSearch={onSearch} />
      }
      <GenreSelect genres={genres} genre={genre} onSelect={onGenreSelect} />
      <SortControl sortBy={sortBy} onSelect={onSortBySelect} />
      <MovieDetails movie={movie} onClick={onMovieDetailsSearchClick} />
      <MovieCounter movies={movies} />
      <MovieList movies={movies} onSelectMovie={onSelectMovie} />
    </>

  );
}
