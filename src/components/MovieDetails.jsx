import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { detailsQuery } from 'services/Api';
import Loader from './Loader/Loader';

const Details = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const details = await detailsQuery(movieId);
        setDetails(details);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  const {
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
  } = details;

  const year = new Date(release_date).getFullYear();
  const userScore = Math.floor(vote_average * 10);
  console.log(backLinkRef);

  return (
    details && (
      <>
        <h3>Details</h3>
        <Link to={backLinkRef.current}>Go back</Link>
        {loading ? (
          <Loader />
        ) : (
          <>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                  : defaultImg
              }
              alt={original_title}
              width={300}
            />

            <h3>
              {original_title} ({year})
            </h3>
            <p>user score {userScore}%</p>
            <p>{overview}</p>
            <ul>
              {genres?.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviws</Link>
              </li>
            </ul>
            <Outlet />
          </>
        )}
      </>
    )
  );
};

export default Details;
