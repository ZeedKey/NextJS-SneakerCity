import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: GoogleSans Regular;
        src: url('./fonts/GoogleSans-Regular.ttf');
    }
    @font-face {
        font-family: GoogleSans Medium;
        src: url('./fonts/GoogleSans-Medium.ttf');
    }
    @font-face {
        font-family: GoogleSans Bold;
        src: url('./fonts/GoogleSans-Bold.ttf');
    }

    input[type=range] {
	position: absolute;
	pointer-events: none;
	-webkit-appearance: none;
	z-index: 2;
	height: 10px;
	width: 100%;
	opacity: 1;
}
input[type=range]::-webkit-slider-thumb {
	pointer-events: all;
	width: 30px;
	height: 30px;
	border-radius: 0;
	border: 0 none;
	background-color: red;
	-webkit-appearance: none;
}

    html, body {
        margin: 0;
        padding: 0;
        /* overflow: hidden; */
    }

    *{
        font-family: GoogleSans Regular;
    }
    p{
        margin: 0;
        color: grey;
    }
    
`