import { FC, ReactElement } from 'react';
import { useIsAuthenticated } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';

type PublicRouteProps = {
    children: ReactElement,
}

export const PublicRoute: FC<PublicRouteProps> = (props) => {
    const isAuthenticated = useIsAuthenticated()();

    return !isAuthenticated ? props.children : <Navigate to='/spamer'/>;
};
