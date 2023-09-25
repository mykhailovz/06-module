import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function MovieForm({modalId, movie, headerText, onClose}) {
  const [genres, setGenre] = useState(['Drama', 'Bio', 'Sci-Fi', 'Comedy', 'Horrro']);
  const [releaseDate, setReleaseDate] = useState(movie?.releaseDate ? new Date(movie?.releaseDate) : new Date());


  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    console.log('Here we have access to all form data to do http req etc')
    console.log('formData', [...formData.entries()]);
    console.log('releaseDate', releaseDate);
    document.getElementById(modalId).close();
  }

  return (
    <>
    <div className="flex flex-wrap">
      <h1>{headerText}</h1>
      <button onClick={onClose} className="ml-20" data-testid='close-movie-form'>X</button>
    </div>

    <form id="movie-form" method="post" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="title"
            name="title"
            defaultValue={movie?.title || ''}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Release Date
          </label>
          <DatePicker showIcon selected={releaseDate} onChange={(date) => setReleaseDate(date)} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Movie Url
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            id="movieUrl"
            name="movieUrl"
            defaultValue={movie?.image || ''}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Rating
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            id="rating"
            name="rating"
            defaultValue={movie?.rating || ''}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Genre
          </label>

          <select
            id="genre"
            name="genre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Genre">Select Genre</option>
            {
              (movie?.genres ?? genres).map(genre => <option key={genre} value={genre}>{genre}</option>)
            }
          </select>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Runtime
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            id="runtime"
            name="runtime"
            defaultValue={movie?.duration || ''}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Overview
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="overview"
            id="overview"
            defaultValue={movie?.description || ''}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <button
            id="submit-movie-form"
            type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
              Add
          </button>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <button
            type="reset" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Reset
          </button>
        </div>
      </div>
      </form>
    </>
  );
}
