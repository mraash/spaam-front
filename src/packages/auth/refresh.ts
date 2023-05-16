import Cookies from 'js-cookie';
import { createRefresh } from 'react-auth-kit';
import { AuthAPI, apiConfig, apiConsts, apiStatus } from '~/api';
import { names } from './cookies';

export const refreshApi = createRefresh({
    interval: apiConfig.refreshEach / 60,
    refreshApiCallback: async () => {
        const authToken = Cookies.get(names.authToken)!;
        const refreshToken = Cookies.get(names.refeshToken)!;

        try {
            const auth = await AuthAPI.refresh(refreshToken);

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
                newAuthToken: authToken,
            };
        }
    },
});

export const makeInitialRefesh = () => {
    const refreshPromise = refreshApi.refreshApiCallback({ authUserState: null });

    apiStatus.initialRefreshing = refreshPromise;

    refreshPromise.then((refreshResult) => {
        if (refreshResult.isSuccess) {
            const cookieDays = apiConsts.refreshTokenTime / 60 / 60 / 24;

            Cookies.set(names.authToken, refreshResult.newAuthToken, {
                expires: cookieDays,
            });
            Cookies.set(names.refeshToken, refreshResult.newRefreshToken!, {
                expires: cookieDays,
            });
        }

        apiStatus.initialRefreshing = false;
    });

    return refreshPromise;
};
