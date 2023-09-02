import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { trendingQuery } from 'services/Api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const movies = await trendingQuery();
        setTrendMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrending();
  }, []);

  return (
    <>
      <h3>Home</h3>
      <ul>
        {trendMovies.map(el => {
          return (
            <li key={el.id}>
              <Link key={el} to={`/movies/${el.id}`}>
                {el.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
