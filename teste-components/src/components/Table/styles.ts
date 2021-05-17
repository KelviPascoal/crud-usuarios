import styled from 'styled-components';

export const Container = styled.div`
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
  cursor: pointer;


th {
  text-align: initial;
  padding: 16px 0 16px 16px;
  color: #505050;
}

td {
  padding: 16px 0 16px 16px;
  color: #505050;
  text-align: initial;

  button {
    border: 0;
    cursor: pointer;
    border-radius: 50%;

    &:hover{
    filter: brightness(0.8);
    }

    
  }

}



}


`;