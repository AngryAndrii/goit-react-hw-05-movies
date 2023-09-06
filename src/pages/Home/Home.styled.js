import { styled } from 'styled-components';

const List = styled.ul`
  div {
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    border: 2px solid #2596be;
    max-width: 200px;
    height: 350px;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export default List;
