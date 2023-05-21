import { createRefresh } from 'react-auth-kit';
import { AuthAPI, apiConfig, apiConsts, apiStatus } from '~/api';
import { authStorage } from './authStorage';

export const refreshApi = createRefresh({
    interval: apiConfig.refreshEach / 60,
    refreshApiCallback: async () => {
        try {
            const refreshToken = authStorage.getRefreshToken();

            const auth = await AuthAPI.refresh(refreshToken);

            const cookieDays = apiConsts.refreshTokenTime / 60 / 60 / 24;

            authStorage.setToken(auth.token, { expires: cookieDays });
            authStorage.setRefreshToken(auth.refreshToken, { expires: cookieDays });

            return {
                isSuccess: true,
                newAuthToken: auth.token,
                newRefreshToken: auth.refreshToken,
                newRefreshTokenExpiresIn: auth.refreshTokenExpiration,
            };
        }
        catch (err) {
            console.error('Invalid token refesh: ', err);

            const authToken = authStorage.getToken();

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

    refreshPromise
        .finally(() => {
            apiStatus.initialRefreshing = false;
        });

    return refreshPromise;
};
