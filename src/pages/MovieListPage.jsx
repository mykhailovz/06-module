import { useEffect, useState } from 'react';

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

export default function MovieListPage() {
  const [movie, setMovie] = useState(null);
  const [genre, setGenre] = useState({ id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState(sortByOptions["Release Date"]);
  const [movies] = useMovies(genre, searchQuery, sortBy);

  const genres = getGenres();

  function onSelectMovie(movie) {
    console.log('[you select movie]: ', movie);
    setMovie(movie);
  }

  function onSearch(searchQuery) {
    console.log('[you just searched mvoie] : ', searchQuery);
    setSearchQuery(searchQuery)
  }

  function onGenreSelect(genre) {
    console.log('[you just select genre] : ', genre);
    setGenre(genre);
  }

  function onSortBySelect(sortBy) {
    console.log('[you select sortBy]: ', sortBy);
    setSortBy(sortByOptions[sortBy]);
  }

  function onMovieDetailsSearchClick() {
    console.log('you click on movie details to search movies');
    setMovie(null);
  }

  return (
    <>
      {
        !movie && <SearchForm defaultSearchQuery={searchQuery} onSearch={onSearch} />
      }
      <GenreSelect genres={genres} genre={genre} onSelect={onGenreSelect} />
      <SortControl sortBy={sortBy} onSelect={onSortBySelect} />
      <MovieDetails movie={movie} onClick={onMovieDetailsSearchClick} />
      <MovieCounter movies={movies} />
      <MovieList movies={movies} onSelectMovie={onSelectMovie} />
    </>

  );
}

function getGenres() {
  return [
    { id: '13a5fa3c-47e2-11ee-be56-0242ac120002', name: 'all' },
    { id: '13a5fd16-47e2-11ee-be56-0242ac120002', name: 'documentary' },
    { id: '13a5fee2-47e2-11ee-be56-0242ac120002', name: 'comedy' },
    { id: '13a60036-47e2-11ee-be56-0242ac120002', name: 'horror' },
    { id: '13a6063a-47e2-11ee-be56-0242ac120002', name: 'crime' }
  ];
}
