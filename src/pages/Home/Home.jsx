import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingQuery } from 'services/Api';
import Loader from 'components/Loader/Loader';
import List, { Title } from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
      <Title>trending today</Title>
      {loading ? (
        <Loader />
      ) : (
        <List>
          {trendMovies.map(({ poster_path, id, title }) => {
            return (
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
            );
          })}
        </List>
      )}
    </>
  );
};

export default Home;
