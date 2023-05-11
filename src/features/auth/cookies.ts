import Cookies from 'js-cookie';

export const getHeader = (): string|null => {
    const type = Cookies.get('_auth_type');
    const token = Cookies.get('_auth');

    if (type === undefined || token === undefined) {
        return null;
    }

    return `${type} ${token}`;
};

export const names = {
    authToken: '_auth',
    refeshToken: '_auth_refresh',
};
