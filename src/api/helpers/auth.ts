import Cookies from 'js-cookie';

export const getHeader = (): string => {
    return `${Cookies.get('_auth_type')!} ${Cookies.get('_auth')!}`;
};
