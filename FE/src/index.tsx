import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { store } from 'app/store';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';
import 'i18n';
import 'index.scss';


const colors = {
    primary: {
        100: '#b53214',
        80: '#b53214CC',
        50: '#b5321480',
        20: '#b5321433',

    },
    background: '#F2F2F2'
};

const theme = extendTheme({ colors });

const container = document.getElementById('root')!; //eslint-disable-line
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Auth0Provider
            clientId="JiLfZv1FXyMMAWaOVwXk4R2gmxXJNiAe"
            domain="dev-bpgp21kwgcal3gsi.us.auth0.com"
            redirectUri={window.location.origin}
        >
            <Provider store={store}>
                <ChakraProvider theme={theme}>
                    <App />
                </ChakraProvider>
            </Provider>
        </Auth0Provider>
    </React.StrictMode>
);
