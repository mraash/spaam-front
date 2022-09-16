import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { SpamPage } from './pages/SpamPage';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/spamer" />} />
                <Route path='/spamer' element={ <SpamPage/> }/>
                <Route path='*' element={ <NotFoundPage/> }/>
            </Routes>
        </BrowserRouter>
    );
};
