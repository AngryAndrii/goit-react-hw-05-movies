import { useParams } from 'react-router';

const Details = () => {
  const { movieId } = useParams();
  return (
    <>
      <h3>Details</h3>
      <>Details: {movieId}</>
    </>
  );
};

export default Details;
