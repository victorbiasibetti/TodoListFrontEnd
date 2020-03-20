import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column
`;

export const Forms = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
   
  div {
    max-width: 80%;
    justify-content: center;
    align-items: center;
  }
  
`;