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
        console.log(movies);
      };
    } catch (error) {
      console.log(error);
    }
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
  // const fetchDetails = async () => {
  //   const details = await detailsQuery();
  //   console.log(details);
  // };
  // fetchDetails();
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
        {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(el => {
          return (
            <li key={el}>
              <Link key={el} to={`/movies/${el}`}>
                {el}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
