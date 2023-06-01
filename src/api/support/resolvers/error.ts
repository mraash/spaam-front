import { AxiosError } from 'axios';
import * as Errors from '../../errors';
import { getErrorData, isApiErrorData } from './response';

const apiErrormatches: Array<[string|RegExp, typeof Errors.ApiError]> = [
    ['Jwt token not found.', Errors.JwtTokenNotFound],
    ['Jwt token expired.', Errors.JwtTokenExpired],
    ['Invalid credentials.', Errors.InvalidCredentials],
    ['User already exists.', Errors.EmailIsTaken],
    ['Invalid refresh token.', Errors.InvalidRefreshToken],

    ['Vk account already added.', Errors.VkAccountAlreadyExists],

    ['Message not allowed.', Errors.MessageNotAllowed],
    [/Recipient with id .+ not found./, Errors.RecipientNotFound],
    ['Captcha needed.', Errors.CaptchaNeeded],
    ['User is blocked.', Errors.UserIsBlockedError],
];

export const resolveApiError = (axiosError: AxiosError): Errors.BaseApiError => {
    if (isApiErrorData(axiosError)) {
        const errorData = getErrorData(axiosError);

        const finedMatch = apiErrormatches.find((error) => errorData.message.match(error[0]));

        if (finedMatch) {
            const FindedError = finedMatch[1];
            return new FindedError();
        }

        return new Errors.UndefinedApiError(axiosError);
    }

    if (axiosError.code === 'ERR_NETWORK') {
        return new Errors.NetworkError();
    }

    return new Errors.UnknownApiError();
};
