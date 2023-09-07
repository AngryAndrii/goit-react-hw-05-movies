import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Details = lazy(() => import('../components/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

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
