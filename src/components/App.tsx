import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import { authThunks } from '~/gstate/thunks/authThunks';
import { useAppDispatch } from '~/hooks/redux';
import { PrivateRoute, PublicRoute } from '../features/router';
import { defaultPrivateRoute, routes } from '~/router/routes';
import { makeInitialRefesh } from '~/features/auth';
import { useIsFirstRender } from '~/hooks/render';
import { MyAccountsPage } from './pages/MyAccountsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProfilePage } from './pages/ProfilePage';
import { SpamPage } from './pages/SpamPage';
import { AuthPage } from './pages/AuthPage';

export const App: FC = () => {
    const dispatch = useAppDispatch();
    const isAuth = useIsAuthenticated();
    const isFirstRender = useIsFirstRender();

    if (isFirstRender && isAuth()) {
        makeInitialRefesh();
        dispatch(authThunks.getUser());
    }

    return (
        <Routes>
            {/* not routes */}
            <Route path='/' element={ <Navigate replace to={ defaultPrivateRoute() }/> }/>
            <Route path='*' element={ <NotFoundPage/> }/>

            {/* public routes */}
            <Route path={ routes.auth() } element={ <PublicRoute children={ <AuthPage/> } /> }/>

            {/* private routes */}
            <Route path={ routes.spamer() } element={ <PrivateRoute children={ <SpamPage/> }/> }/>
            <Route path={ routes.myAccounts() } element={ <PrivateRoute children={ <MyAccountsPage/> }/> }/>
            <Route path={ routes.profile() } element={ <PrivateRoute children={ <ProfilePage/> }/> }/>
        </Routes>
    );
};
