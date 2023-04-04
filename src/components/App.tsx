import { FC } from 'react';
import { RequireAuth } from 'react-auth-kit';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MyAccountsPage } from './pages/MyAccountsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProfilePage } from './pages/ProfilePage';
import { SpamPage } from './pages/SpamPage';
import { AuthPage } from './pages/AuthPage';

export const App: FC = () => {
    return (
        <Routes>
            <Route path='/auth' element={ <AuthPage/> }/>

            <Route path='/' element={
                <RequireAuth loginPath='/auth'>
                    <Navigate replace to="/spamer" />
                </RequireAuth>
            }/>

            <Route path='/spamer' element={
                <RequireAuth loginPath='/auth'>
                    <SpamPage/>
                </RequireAuth>
            }/>

            <Route path='/my-accounts' element={
                <RequireAuth loginPath='/auth'>
                    <MyAccountsPage/>
                </RequireAuth>
            }/>

            <Route path='/profile' element={
                <RequireAuth loginPath='/auth'>
                    <ProfilePage/>
                </RequireAuth>
            }/>

            <Route path='*' element={ <NotFoundPage/> }/>
        </Routes>
    );
};
