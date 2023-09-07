import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchQuery } from 'services/Api';
import Loader from 'components/Loader/Loader';
import StyledMovies from './Movies.styled';
import List from 'pages/Home/Home.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
      <StyledMovies>
        <h2>Movies</h2>
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
            <List>
              {movies?.map(({ id, title, poster_path }) => (
                <li key={id}>
                  <Link state={{ from: location }} to={`/movies/${id}`}>
                    <div>
                      <img
                        src={
                          poster_path
                            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                            : defaultImg
                        }
                        alt={title}
                        width={200}
                      />
                      <span>{title}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </List>
          )}
        </div>
      </StyledMovies>
    )
  );
};

export default Movies;
