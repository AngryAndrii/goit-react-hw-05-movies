import { styled } from 'styled-components';

const StyledMovies = styled.div`
  h2 {
    font-size: 25px;
    margin-bottom: 20px;
  }

  form {
    height: 35px;
    margin-bottom: 20px;
  }

  input {
    height: 100%;
    box-shadow: rgba(37, 150, 190, 0.3) 1.95px 1.95px 2.6px;
    border: none;
    outline: 1px solid #2596be;
    padding-left: 5px;
  }

  input:is(:active, :focus) {
    background-color: #145369;
    border: none;
    outline: none;
  }

  button {
    height: 100%;
    width: 80px;
    background-color: #145369;
    box-shadow: rgba(37, 150, 190, 0.3) 1.95px 1.95px 2.6px;
    outline: 1px solid #2596be;
  }

  button:hover {
    border: none;
    background-color: #2596be;
    box-shadow: rgba(37, 150, 190, 0.8) 0px 0px 0px 2px,
      rgba(37, 150, 190, 0.8) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;

export default StyledMovies;
