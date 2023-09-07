import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { reviewsQuery } from 'services/Api';
import StyledReviews from './Reviews.styled';

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

  if (reviews.length === 0) {
    return <h2>There are no reviews</h2>;
  }

  return (
    reviews && (
      <StyledReviews>
        <h2>Reviews</h2>

        <ul>
          {reviews?.map(({ author, content, id }) => (
            <li key={id}>
              <p>
                <span>author:</span> {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </StyledReviews>
    )
  );
};

export default Reviews;
