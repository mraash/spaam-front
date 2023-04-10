import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import { authThunks } from '~/gstate/thunks/authThunks';
import { useAppDispatch } from '~/hooks/redux';
import { PrivateRoute } from '../support/router';
import { makeInitialRefesh } from '~/support/auth';
import { useIsFirstRender } from '~/hooks/render';
import { MyAccountsPage } from './pages/MyAccountsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProfilePage } from './pages/ProfilePage';
import { SpamPage } from './pages/SpamPage';
import { AuthPage } from './pages/AuthPage';
import { PublicRoute } from '~/support/router/PublicRoute';

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
            <Route path='/' element={ <Navigate replace to="/spamer"/> }/>
            <Route path='*' element={ <NotFoundPage/> }/>

            {/* public routes */}
            <Route path='/auth' element={ <PublicRoute children={ <AuthPage/> } /> }/>

            {/* private routes */}
            <Route path='/spamer' element={ <PrivateRoute children={ <SpamPage/> }/> }/>
            <Route path='/my-accounts' element={ <PrivateRoute children={ <MyAccountsPage/> }/> }/>
            <Route path='/profile' element={ <PrivateRoute children={ <ProfilePage/> }/> }/>
        </Routes>
    );
};
