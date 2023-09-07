import Cast from 'components/Cast/Cast';
import Home from 'pages/Home/Home';
import Details from 'components/MovieDetails/MovieDetails';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import Reviews from 'components/Reviews/Reviews';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

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
