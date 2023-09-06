import { Link, Outlet } from 'react-router-dom';
import Header from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2023 Angry Andrii</p>
      </footer>
    </>
  );
};

export default Layout;
