import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchQuery } from 'services/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

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
      return;
    }
    const fetchMovies = async () => {
      try {
        const movies = await searchQuery(movieQuery);
        console.log(movies);
        setMovies(movies);
      } catch (error) {
        console.log(error);
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
          <ul>
            {movies?.map(({ id, original_title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>{original_title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  );
};

export default Movies;
