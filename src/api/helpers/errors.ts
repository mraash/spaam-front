import { AxiosError } from 'axios';
import { ApiError, UnknownApiError } from '../apiErrors';

/**
 * If the axios error is default (one that can return in any route) then throw the corresponding error,
 *  otherwise throw ApiError. You shold use this method after.
 *
 * You should use this method at the end of every try catch block.
 */
export const getDefaultApiError = (error: AxiosError): ApiError => {
    return new UnknownApiError(error);
};
