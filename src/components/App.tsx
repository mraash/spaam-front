import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { SpamPage } from './pages/SpamPage';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <SpamPage/> }/>
                <Route path='*' element={ <NotFoundPage/> }/>
            </Routes>
        </BrowserRouter>
    );
};
