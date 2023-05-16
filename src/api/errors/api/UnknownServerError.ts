import { AxiosError } from 'axios';
import { getErrorData } from '~/api/support/resolvers';
import { ApiError } from './ApiError';

export class UnknownServerError extends ApiError {
    public readonly axiosError: AxiosError;
    public readonly errorData: ReturnType<typeof getErrorData>;

    public constructor(axiosError: AxiosError) {
        super('Something went wrong.');
        Object.setPrototypeOf(this, UnknownServerError.prototype);

        this.axiosError = axiosError;
        this.errorData = getErrorData(axiosError);
    }
}
