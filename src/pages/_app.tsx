import type { AppProps } from "next/app";
import { GlobalStyle } from "./GlobalStyle";
import { Provider } from 'react-redux'
import { store } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

export default MyApp;