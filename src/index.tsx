import './assets/styles/main.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { refreshApi } from './api/app';
import { store } from './gstate/store';
import { App } from './components/App';

createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <Provider store={ store }>
            <AuthProvider
                authType='cookie'
                authName='_auth'
                cookieDomain={ window.location.hostname }
                cookieSecure={ false }
                refresh={ refreshApi }
            >
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AuthProvider>
        </Provider>
    </React.StrictMode>,
);
