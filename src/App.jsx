import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import FetchMovieDetails from './components/FetchMovieDetails.jsx';

import MovieListPage from './pages/MovieListPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'movies/:id',
        element: <FetchMovieDetails />
      }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
