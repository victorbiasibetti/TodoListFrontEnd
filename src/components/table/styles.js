import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  max-width: 95%;
  width: 600px;


  border: 10px solid #dedefe ;
  border-radius: 10px;
  padding: 10px;


  h2 {
    display: flex;
    justify-content: center; 
  }
  table {
    width: 100%;
        
    thead, tbody{
      display: block;
    }

    th {
      width: 10%;
    }

    td {
      width: 200px;

      overflow:hidden;
      
      text-overflow: ellipsis;

      text-align: center;
      border-top: 1px solid #069;
      
    }


    tbody{
      overflow-y: scroll;
      height: 150px;
      justify-content: center;

    }
  }
  button {
    margin: 5px;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 5px;
    font-weight:bold;
  }

  .edit {
    background: #069;
    
  }

  .delete {
    background: tomato;
  }
`;
