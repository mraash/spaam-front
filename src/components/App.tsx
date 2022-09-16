import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MyAccountsPage } from './pages/MyAccountsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProfilePage } from './pages/ProfilePage';
import { SpamPage } from './pages/SpamPage';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Navigate replace to="/spamer" /> } />
                <Route path='/spamer' element={ <SpamPage/> }/>
                <Route path='/my-accounts' element={ <MyAccountsPage/> }/>
                <Route path='/profile' element={ <ProfilePage/> }/>
                <Route path='*' element={ <NotFoundPage/> }/>
            </Routes>
        </BrowserRouter>
    );
};
