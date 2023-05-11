import { AxiosError } from 'axios';
import * as Errors from '../../errors';
import { getErrorData } from './response';

const matches: Array<[string|RegExp, typeof Errors.ApiError]> = [
    ['Jwt token not found.', Errors.JwtTokenNotFound],
    ['Invalid credentials.', Errors.InvalidCredentials],
    ['User already exists.', Errors.EmailIsTaken],
    ['Invalid refresh token.', Errors.InvalidRefreshToken],

    ['Message not allowed.', Errors.MessageNotAllowed],
    [/Recipient with id .+ not found./, Errors.RecipientNotFound],
    ['Captcha needed.', Errors.CaptchaNeeded],
];

export const resolveApiError = (axiosError: AxiosError): Errors.ApiError => {
    const errorData = getErrorData(axiosError);

    const match = matches.find((error) => errorData.message.match(error[0]));

    if (match) {
        return new match[1]();
    }

    return new Errors.UnknownApiError(axiosError);
};
