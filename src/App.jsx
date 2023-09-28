import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import DeleteMovie from './components/DeleteMovie';
import MovieAdded from './components/MovieAdded';
import Alert from './components/Alert.jsx';
import FetchMovieDetails from './components/FetchMovieDetails.jsx';

import MovieListPage from './pages/MovieListPage.jsx';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  function handleAdd() {
    document.getElementById('add-movie').showModal();
  }

  function handleEdit() {
    document.getElementById('edit-movie').showModal();
  }

  function handleDelete() {
    document.getElementById('delete-movie').showModal();
  }

  function handleMovieAdded() {
    document.getElementById('movie-added').showModal();
  }

  const movieToEdit =     {
    id: '2461b6ba-5091-11ee-be56-0242ac120002',
    title: 'Pulp Fiction',
    vote_average: 8.9,
    overview: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    runtime: '2h 34m',
    genres: ['Drama', 'Biography', 'Music', 'Crime'],
    release_date: '1994-11-14T09:49:14.171Z',
    poster_path: 'https://flxt.tmsimg.com/assets/p15684_p_v13_an.jpg'
  };

  function handleAlert() {
    setShowAlert(!showAlert);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieListPage />} />
          <Route path='/:movieId' element={<FetchMovieDetails />} />
        </Routes>

        <h1>Here is a list of modals</h1>
        <ul>
          <li onClick={() => handleAdd()}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Movie Modal</button></li>
          <li onClick={() => handleEdit()}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit Movie Modal</button></li>
          <li onClick={() => handleDelete()}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Delete Movie Modal</button></li>
          <li onClick={() => handleMovieAdded()}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Movie Added Modal</button></li>
          <li onClick={() => handleAlert()}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>handle alert</button></li>
        </ul>

        <AddMovie />
        <EditMovie movie={movieToEdit} />
        <DeleteMovie />
        <MovieAdded />
        {
          showAlert && <Alert onClose={setShowAlert}><p>Error happened</p></Alert>
        }
      </BrowserRouter>
    </>
  );
}

export default App;
