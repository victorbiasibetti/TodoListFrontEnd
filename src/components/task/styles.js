import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  
  grid-template-columns: 100px 1fr;
  grid-row-gap: 20px;

  width: 90%;
  border-radius: 10px;
  border: #000 solid;
  padding: 10px;
   

  h2 {
    grid-column: 1/3;
    justify-self: center;
  }

  label {
    justify-self: center;
    font-size: 18px;
  }

  input {
    font-size: 14px;
  }

  button {
    justify-self: center;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    background: #069;
    color: #fff;
    font-weight: bold;
    grid-column: 1/3;
  }
  
  
`;
