import Cast from 'pages/Cast';
import Home from 'pages/Home';
import Details from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import Reviews from 'pages/Reviews';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
