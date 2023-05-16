import { AxiosError, AxiosResponse } from 'axios';

type ErrorResponse = {
    success: boolean,
    error: ErrorData,
};

type ErrorData = {
    message: string,
};

export const getPayload = (axiosResponse: AxiosResponse): any => {
    return axiosResponse.data.payload;
};

export const isApiErrorData = (axiosError: AxiosError): boolean => {
    return typeof axiosError.response?.data === 'object';
};

export const getErrorData = (axiosError: AxiosError): ErrorData => {
    const data = axiosError.response?.data as ErrorResponse;

    return data.error;
};
