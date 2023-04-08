import Cookies from 'js-cookie';

export const getHeader = (): string|undefined => {
    return `${Cookies.get('_auth_type')!} ${Cookies.get('_auth')}`;
};
