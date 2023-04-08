import { AxiosError } from 'axios';
import * as Errors from '../../errors';
import { getErrorData } from './response';

const matches: Array<[string, typeof Errors.ApiError]> = [
    ['Jwt token not found.', Errors.JwtTokenNotFound],
    ['Invalid credentials.', Errors.InvalidCredentials],
    ['User already exists.', Errors.EmailIsTaken],
    ['Invalid refresh token.', Errors.InvalidRefreshToken],
];

export const resolveApiError = (axiosError: AxiosError): Errors.ApiError => {
    const errorData = getErrorData(axiosError);

    const match = matches.find((error) => error[0] === errorData.message);

    if (match) {
        return new match[1]();
    }

    return new Errors.UnknownApiError(axiosError);
};
