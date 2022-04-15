import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    input[type=range] {
	position: absolute;
	pointer-events: none;
	-webkit-appearance: none;
	z-index: 2;
	height: 10px;
	width: 100%;
	opacity: 1;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=range]::-webkit-slider-thumb {
        pointer-events: all;
        width: 30px;
        height: 30px;
        border-radius: 0;
        border: 0 none;
        background-color: ${theme.colors.RED};
        -webkit-appearance: none;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    *{
        font-family: 'Product Sans', sans-serif;
    }
    p{
        margin: 0;
        color: ${theme.colors.GREY};
    }
    
`;
