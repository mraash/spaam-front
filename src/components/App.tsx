import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from '../support/router/PrivateRoute';
import { MyAccountsPage } from './pages/MyAccountsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProfilePage } from './pages/ProfilePage';
import { SpamPage } from './pages/SpamPage';
import { AuthPage } from './pages/AuthPage';

export const App: FC = () => {
    return (
        <Routes>
            {/* not routes */}
            <Route path='/' element={ <Navigate replace to="/spamer"/> }/>
            <Route path='*' element={ <NotFoundPage/> }/>

            {/* public routes */}
            <Route path='/auth' element={ <AuthPage/> }/>

            {/* private routes */}
            <Route path='/spamer' element={ <PrivateRoute children={ <SpamPage/> }/> }/>
            <Route path='/my-accounts' element={ <PrivateRoute children={ <MyAccountsPage/> }/> }/>
            <Route path='/profile' element={ <PrivateRoute children={ <ProfilePage/> }/> }/>
        </Routes>
    );
};
