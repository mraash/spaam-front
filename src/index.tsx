import { createRoot } from 'react-dom/client';
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './assets/styles/base/index.scss';
import { refreshApi } from './packages/auth';
import { store } from './gstate/store';
import { App } from './components/App';

createRoot(document.querySelector('#root')!).render(
    <Provider store={ store }>
        <AuthProvider
            authType='cookie'
            authName='_auth'
            cookieDomain={ window.location.hostname }
            cookieSecure={ window.location.protocol === 'https:' }
            refresh={ refreshApi }
        >
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AuthProvider>
    </Provider>,
);
