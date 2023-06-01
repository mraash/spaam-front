import { AxiosError } from 'axios';
import * as Errors from '../../errors';
import { getErrorData, isApiErrorData } from './response';

const apiErrormatches: Array<[string|RegExp, typeof Errors.ApiError]> = [
    ['Jwt token not found.', Errors.JwtTokenNotFoundError],
    ['Jwt token expired.', Errors.JwtTokenExpiredError],
    ['Invalid credentials.', Errors.InvalidCredentialsError],
    ['User already exists.', Errors.EmailIsTakenError],
    ['Invalid refresh token.', Errors.InvalidRefreshTokenError],

    ['Vk account already added.', Errors.VkAccountAlreadyExistsError],

    ['Message not allowed.', Errors.MessageNotAllowedError],
    [/Recipient with id .+ not found./, Errors.RecipientNotFoundError],
    ['Captcha needed.', Errors.CaptchaNeededError],
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
