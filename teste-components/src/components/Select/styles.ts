import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    select {
        height: 40px;
        width: 100%;
        height: 40px;
        font-size: 18px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #363636;
        border: 0;
        background-color: #fff;
        padding-left: 12px;


        ::placeholder{
            color: #A9A9A9;
        }
    }

    span {
        font-size: 22px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: #696969;
    }

`;