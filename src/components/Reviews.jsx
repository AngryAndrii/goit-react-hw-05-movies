import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  return (
    <>
      <h4>Reviews</h4>
      <p>{movieId}</p>
    </>
  );
};

export default Reviews;
