import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Details = () => {
  const { movieId } = useParams();
  return (
    <>
      <h3>Details</h3>
      <>Details: {movieId}</>
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
  );
};

export default Details;
