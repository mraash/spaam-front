import axios from 'axios';
import { createRefresh } from 'react-auth-kit';
import { apiConfig } from './config';

export const refreshApi = createRefresh({
    interval: apiConfig.refreshEach / 60,
    refreshApiCallback: async (params) => {
        try {
            const { payload } = (await axios.post('http://api.spamer.my/v1/auth/refresh', {
                refreshToken: params.refreshToken,
            })).data;

            return {
                isSuccess: true,
                newAuthToken: payload.token,
                newRefreshToken: payload.refreshToken,
                newRefreshTokenExpiresIn: payload.refreshTokenExpiration,
            };
        }
        catch (err) {
            console.error(err);

            return {
                isSuccess: false,
                newAuthToken: params.authToken!,
            };
        }
    },
});
