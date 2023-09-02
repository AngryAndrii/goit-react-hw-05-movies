import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { reviewsQuery } from 'services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await reviewsQuery(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    reviews && (
      <>
        <h4>Reviews</h4>
        <ul>
          {reviews?.map(({ author, content, id }) => (
            <li key={id}>
              <p>author:{author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default Reviews;
