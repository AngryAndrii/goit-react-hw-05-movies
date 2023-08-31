import { Link } from 'react-router-dom';

const Home = () => {
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
