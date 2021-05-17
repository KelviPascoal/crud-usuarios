import styled from 'styled-components';

export const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: flex;

header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    Button {
        height: 2rem;
        width: 3rem;
        padding: 4px;
        font-size: 18px;

    }
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
  text-align: left;
  padding: 18px;
}

tr:nth-child(even) {
  background-color: #E0FFFF;
}
`;


