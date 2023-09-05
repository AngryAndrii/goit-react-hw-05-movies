import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingQuery } from 'services/Api';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const movies = await trendingQuery();
        setTrendMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  return (
    <>
      <h3>Home</h3>
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {trendMovies.map(el => {
            return (
              <li key={el.id}>
                <Link
                  state={{ from: location }}
                  key={el}
                  to={`/movies/${el.id}`}
                >
                  {el.original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Home;
