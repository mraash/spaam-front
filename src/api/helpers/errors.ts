import { AxiosError } from 'axios';
import { ApiError, JwtTokenNotFoundError, UnknownApiError } from '../Errors';
import { getError } from './responses';

/**
 * If the axios error is default (one that can return in any route) then throw the corresponding error,
 *  otherwise throw ApiError. You shold use this method after.
 *
 * You should use this method at the end of every try catch block.
 */
export const getDefaultApiError = (axiosError: AxiosError): ApiError => {
    const errorData = getError(axiosError);

    if (errorData.message === 'Jwt token not found.') {
        return new JwtTokenNotFoundError();
    }

    return new UnknownApiError(axiosError);
};
