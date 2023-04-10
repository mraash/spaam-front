import { FC, ReactElement } from 'react';
import { useIsAuthenticated } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';
import { defaultPublicRoute } from '~/router/routes';

type PrivateRouteProps = {
    children: ReactElement,
}

export const PrivateRoute: FC<PrivateRouteProps> = (props) => {
    const isAuthenticated = useIsAuthenticated()();

    return isAuthenticated ? props.children : <Navigate to={ defaultPublicRoute() }/>;
};
