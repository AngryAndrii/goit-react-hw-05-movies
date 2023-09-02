import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { detailsQuery } from 'services/Api';

const Details = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const detail = await detailsQuery(movieId);
        setDetails(detail);
      } catch (error) {
        console.log(error);
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

  return (
    details && (
      <>
        <h3>Details</h3>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
        />

        <h3>
          {original_title} {release_date}
        </h3>
        <p>user score {vote_average}</p>
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
    )
  );
};

export default Details;
