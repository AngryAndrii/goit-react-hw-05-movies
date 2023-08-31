import Cast from 'pages/Cast';
import Home from 'pages/Home';
import Details from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import Reviews from 'pages/Reviews';
import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
