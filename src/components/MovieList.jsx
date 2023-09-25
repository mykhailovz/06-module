import MovieItem from './MovieItem';

export default function MovieList({movies = [], onSelectMovie}) {
  return (
    <div data-testid='movie-list' className='grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3'>
      {
        movies.map(movie => <MovieItem key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />)
      }
    </div>
  );
}
