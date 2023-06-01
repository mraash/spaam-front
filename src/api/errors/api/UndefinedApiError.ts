import { AxiosError } from 'axios';
import { getErrorData } from '~/api/support/resolvers';
import { ApiError } from './ApiError';

export class UndefinedApiError extends ApiError {
    public readonly axiosError: AxiosError;
    public readonly errorData: ReturnType<typeof getErrorData>;

    public constructor(axiosError: AxiosError) {
        super('Unknown api error.');
        Object.setPrototypeOf(this, UndefinedApiError.prototype);

        this.axiosError = axiosError;
        this.errorData = getErrorData(axiosError);
    }
}
