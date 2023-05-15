export const routes = {
    auth: () => '/auth',
    spammer: () => '/spammer',
    myAccounts: () => '/my-accounts',
    profile: () => '/profile',
};

export const defaultPrivateRoute = () => routes.spammer();
export const defaultPublicRoute = () => routes.auth();
