import { createGlobalStyle } from 'styled-components';
import '../style/steppe-font/Web-PS/Steppe.css'

const GlobalStyle = createGlobalStyle`

    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Steppe' !important;  
    }

    li{
        list-style-type: none;
    }

    a{
        text-decoration:none;

    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Steppe' !important;  
    }
`;
export default GlobalStyle;