import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from './Layout.styled';
import Loader from 'components/Loader/Loader';

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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <p>&copy; 2023 Angry Andrii</p>
      </footer>
    </>
  );
};

export default Layout;
