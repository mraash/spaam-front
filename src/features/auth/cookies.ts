import Cookies from 'js-cookie';

export const getHeader = (): string|false => {
    const type = Cookies.get('_auth_type');
    const token = Cookies.get('_auth');

    if (type === undefined || token === undefined) {
        return false;
    }

    return `${type} ${token}`;
};

export const names = {
    authToken: '_auth',
    refeshToken: '_auth_refresh',
};
