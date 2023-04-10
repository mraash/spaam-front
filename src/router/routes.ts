export const routes = {
    auth: () => '/auth',
    spamer: () => '/spamer',
    myAccounts: () => '/my-accounts',
    profile: () => '/profile',
};

export const defaultPrivateRoute = () => routes.spamer();
export const defaultPublicRoute = () => routes.auth();
