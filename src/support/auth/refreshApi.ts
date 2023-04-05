import { createRefresh } from 'react-auth-kit';
import { api, apiConfig } from '~/api';

export const refreshApi = createRefresh({
    interval: apiConfig.refreshEach / 60,
    refreshApiCallback: async (params) => {
        try {
            const auth = await api.auth.refresh(params.refreshToken!);

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
                newAuthToken: params.authToken!,
            };
        }
    },
});
