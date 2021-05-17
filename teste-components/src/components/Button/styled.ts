import styled, { css } from "styled-components";

interface ButtonProps {
    bgColor: string;
    color: string;
}

export const Container = styled.button<ButtonProps>`
border: 0;
margin: 4px;


border-radius: 4px;
height: 38px;
padding: 0 2rem;

${(props) => props && css`
                background-color: ${props.bgColor};
                color: ${props.color};
            `};


`;