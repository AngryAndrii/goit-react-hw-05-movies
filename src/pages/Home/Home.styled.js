import { styled } from 'styled-components';

const List = styled.ul`
  div {
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    border: 2px solid #2596be;
    max-width: 200px;
    height: 350px;
    box-shadow: rgba(37, 150, 190, 0.3) 1.95px 1.95px 2.6px;
  }

  img {
    border-bottom: 1px solid #2596be;
  }

  span {
    color: #145369;
    font-size: 15px;
    font-weight: 500;
    padding-left: 3px;
    padding-right: 3px;
    padding-bottom: 3px;
    margin: 0 auto;
  }

  div:hover {
    box-shadow: rgba(37, 150, 190, 0.8) 0px 0px 0px 2px,
      rgba(37, 150, 190, 0.8) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
`;

export default List;
