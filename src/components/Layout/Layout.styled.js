import { styled } from 'styled-components';

const Header = styled.header`
  nav {
    padding-bottom: 10px;
    padding-top: 10px;
  }

  nav > ul {
    padding-left: 25px;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
  }

  a {
    display: block;
    height: 25px;
    font-size: 18px;
  }

  height: 50px;
  border-bottom: 2px solid #2596be;
`;

export default Header;
