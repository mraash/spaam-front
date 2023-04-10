import React from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './assets/styles/main.scss';
import { refreshApi } from './support/auth';
import { store } from './gstate/store';
import { App } from './components/App';

createRoot(document.querySelector('#root')!).render(
    <Provider store={ store }>
        <AuthProvider
            authType='cookie'
            authName='_auth'
            refresh={ refreshApi }
        >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AuthProvider>
    </Provider>,
);
