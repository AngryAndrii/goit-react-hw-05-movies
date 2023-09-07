import { NavLink, Outlet } from 'react-router-dom';
import Header from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
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
