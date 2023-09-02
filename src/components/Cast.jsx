import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { castQuery } from 'services/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const casting = await castQuery(movieId);
        console.log(casting);
        setCast(casting);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    cast && (
      <>
        <h4>Cast</h4>
        <ul style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
          {cast?.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : defaultImg
                }
                alt={name}
                width={150}
              />
              <p>name: {name}</p>
              <p>character: {character}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default Cast;
