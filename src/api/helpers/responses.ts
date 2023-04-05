import { AxiosError, AxiosResponse } from 'axios';

type SuccessResponse = {
    success: boolean,
    payload: any,
};

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

export const getError = (axiosError: AxiosError): ErrorData => {
    const data = axiosError.response?.data as ErrorResponse;

    return data.error;
};
