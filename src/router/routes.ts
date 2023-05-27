export const routes = {
    auth: () => '/auth',
    spammer: () => '/spam',
    myAccounts: () => '/my-accounts',
    createVkAccount: () => '/create-vk-account',
    profile: () => '/profile',
};

export const defaultPrivateRoute = () => routes.spammer();
export const defaultPublicRoute = () => routes.auth();
