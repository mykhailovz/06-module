import { useState } from 'react';

function GenreSelect({genres, genre, onSelect}) {
  const [selectedGenre, setSelectedGenre] = useState(genre);

  function handleClick(genre) {
    setSelectedGenre(genre);
    onSelect(genre);
  }

  return (
    <ul id="genres-list" data-testid='genres-list' className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
      {genres.map(g => {
        return (
          <li className={`${selectedGenre?.id === g.id ? 'bg-gray-400' : ''}`} key={g.id} onClick={() => handleClick(g)}>
            <a className='mr-4 md:mr-6 uppercase underline' href='#'>{g.name}</a>
          </li>
        )
      })}
    </ul>
  );
}

export default GenreSelect;
