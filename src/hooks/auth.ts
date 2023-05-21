import { useSignIn, useSignOut } from 'react-auth-kit';
import { apiConsts } from '~/api';
import { authStorage } from '~/packages/auth';

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

export const useAppSignOut = () => {
    const signOut = useSignOut();

    return () => {
        authStorage.clear();

        signOut();

        window.location.reload();
    };
};
