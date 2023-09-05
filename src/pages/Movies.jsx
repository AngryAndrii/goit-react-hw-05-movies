import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchQuery } from 'services/Api';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const movieQuery = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.movieSearch.value;
    inputValue === ''
      ? setSearchParams({})
      : setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (movieQuery === null || movieQuery === '') {
      setMovies([]);
      return;
    }
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const movies = await searchQuery(movieQuery);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [movieQuery]);

  return (
    movies && (
      <>
        <h3>Movies</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="movieSearch"
            defaultValue={movieQuery}
          />
          <button type="submit">Search</button>
        </form>
        <div>
          {loading ? (
            <Loader />
          ) : (
            <ul>
              {movies?.map(({ id, original_title }) => (
                <li key={id}>
                  <Link state={{ from: location }} to={`/movies/${id}`}>
                    {original_title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    )
  );
};

export default Movies;
