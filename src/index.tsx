import './assets/styles/main.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './gstate/store';
import { App } from './components/App';

createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <Provider store={ store }>
            <App/>
        </Provider>
    </React.StrictMode>,
);
