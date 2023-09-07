import { styled } from 'styled-components';

const StyledCast = styled.div`
  div {
    display: flex;
    flex-direction: column;
    /* row-gap: 7px; */
    /* outline: 1px solid #2596be; */
    max-width: 150px;
    width: 150px;
    height: 350px;
    box-shadow: rgba(37, 150, 190, 0.3) 1.95px 1.95px 2.6px;
    justify-content: flex-end;
  }

  img {
    border-bottom: 1px solid #2596be;
  }

  span {
    color: #2596be;
    font-size: 15px;
    font-weight: 500;
    padding-left: 3px;
    padding-right: 3px;
    padding-bottom: 3px;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export default StyledCast;
