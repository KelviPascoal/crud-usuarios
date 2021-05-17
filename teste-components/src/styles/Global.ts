import { createGlobalStyle } from 'styled-components';
export const Global = createGlobalStyle`
:root{
    background-color: #EEE;
}
.react-modal-overlay {
background-color: rgba(0,0,0,0.5);

position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;

display: flex;
justify-content: center;
align-items: center;
}

.react-modal-content {
    width: 100%;
    max-width: 960px;
    height: 600px;
    background-color: #D3D3D3;
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
}

button{
    &:hover {
                filter: brightness(0.8);
            }
}

span{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 16px;
    color: #505050;
}

h1 {
    font-size: 21px;
    color: #505050;
}

`;
