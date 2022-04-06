import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: Open Sans Light;
        src: url('./fonts/OpenSans-Light.ttf');
    }
    @font-face {
        font-family: Open Sans Regular;
        src: url('./fonts/OpenSans-Regular.ttf');
    }
    @font-face {
        font-family: Open Sans Medium;
        src: url('./fonts/OpenSans-Medium.ttf');
    }
    @font-face {
        font-family: Open Sans SemiBold;
        src: url('./fonts/OpenSans-SemiBold.ttf');
    }
    @font-face {
        font-family: Open Sans Bold;
        src: url('./fonts/OpenSans-Bold.ttf');
    }

    html, body {
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    *{
        font-family: Open Sans Regular;
    }
    p{
        margin: 0;
        color: grey;
    }
`