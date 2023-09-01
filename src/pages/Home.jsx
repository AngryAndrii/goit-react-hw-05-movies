import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  //   castQuery,
  //   detailsQuery,
  //   reviewsQuery,
  //   searchQuery,
  trendingQuery,
} from 'services/Api';

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

  //
  // const fetchReviews = async () => {
  //   const reviews = await reviewsQuery();
  //   console.log(reviews);
  // };
  // fetchReviews();
  //
  // const fetchCast = async () => {
  //   const cast = await castQuery();
  //   console.log(cast);
  // };
  // fetchCast();
  //
  // const fetchSearch = async () => {
  //   const searchResult = await searchQuery();
  //   console.log(searchResult);
  // };
  // fetchSearch();

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
