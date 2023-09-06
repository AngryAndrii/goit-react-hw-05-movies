import { styled } from 'styled-components';

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  button {
    display: block;
    width: 150px;
    height: 35px;
    border: 2px solid #2596be;
    font-size: 18px;
    font-weight: 300;
  }
  button:hover {
    color: #145369;
    box-shadow: rgba(37, 150, 190, 0.8) 0px 0px 0px 2px,
      rgba(37, 150, 190, 0.8) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }

  .addInfo {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }
`;

export default StyledDetails;
