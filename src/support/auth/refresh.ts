import Cookies from 'js-cookie';
import { createRefresh } from 'react-auth-kit';
import { api, apiConfig, apiConsts, apiStatus } from '~/api';

export const refreshApi = createRefresh({
    interval: apiConfig.refreshEach / 60,
    refreshApiCallback: async ({ refreshToken, authToken }) => {
        try {
            const auth = await api.auth.refresh(refreshToken!);

            return {
                isSuccess: true,
                newAuthToken: auth.token,
                newRefreshToken: auth.refreshToken,
                newRefreshTokenExpiresIn: auth.refreshTokenExpiration,
            };
        }
        catch (err) {
            return {
                isSuccess: false,
                newAuthToken: authToken!,
            };
        }
    },
});

export const makeInitialRefesh = () => {
    console.log('refresh: Make initial refresh...');

    const authToken = Cookies.get('_auth')!;
    const refreshToken = Cookies.get('_auth_refresh')!;

    const refreshPromise = refreshApi.refreshApiCallback({
        authUserState: null,
        authToken,
        refreshToken,
    });

    apiStatus.initialRefreshing = refreshPromise;

    refreshPromise.then((refreshResult) => {
        const cookieDays = apiConsts.refreshTokenTime / 60 / 60 / 24;

        if (!refreshResult.isSuccess) {
            Cookies.remove('_auth');
            throw new Error('Bad token refresh.');
        }

        Cookies.set('_auth', refreshResult.newAuthToken!, {
            expires: cookieDays,
        });
        Cookies.set('_auth_refresh', refreshResult.newRefreshToken!, {
            expires: cookieDays,
        });

        console.log('refresh: End initial refresh...');

        apiStatus.initialRefreshing = false;
    });

    return refreshPromise;
};
