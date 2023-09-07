import { styled } from 'styled-components';

const StyledReviews = styled.div`
  h2 {
    font-size: 25px;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }

  li {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  span {
    color: #2596be;
  }
`;

export default StyledReviews;
