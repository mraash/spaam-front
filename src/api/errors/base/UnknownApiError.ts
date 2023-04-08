import { AxiosError } from 'axios';
import { getErrorData } from '~/api/support/resolvers';
import { ApiError } from './ApiError';

export class UnknownApiError extends ApiError {
    public readonly axiosError: AxiosError;

    public constructor(axiosError: AxiosError) {
        const errorData = getErrorData(axiosError);
        super(errorData.message);
        Object.setPrototypeOf(this, UnknownApiError.prototype);

        this.axiosError = axiosError;
    }
}
