import { useSignIn, useSignOut } from 'react-auth-kit';
import { apiConsts } from '~/api';

export const useAppSignIn = () => {
    const signIn = useSignIn();

    return (token: string, refreshToken: string, email: string): boolean => {
        return signIn({
            token,
            refreshToken,
            authState: { email },
            expiresIn: apiConsts.refreshTokenTime / 60,
            refreshTokenExpireIn: apiConsts.refreshTokenTime / 60,
            tokenType: 'Bearer',
        });
    };
};
