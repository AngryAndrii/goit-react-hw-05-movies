import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { castQuery } from 'services/Api';
import StyledCast from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await castQuery(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    cast && (
      <StyledCast>
        <h2>Cast</h2>
        <ul style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
          {cast?.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              <div>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                  width={150}
                />
                <div>
                  <span>name: {name}</span>
                  <span>character: {character}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </StyledCast>
    )
  );
};

export default Cast;
