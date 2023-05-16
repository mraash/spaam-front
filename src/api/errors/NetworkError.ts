import { BaseApiError } from './BaseApiError';

export class NetworkError extends BaseApiError {
    public constructor() {
        super('Connection lost.');
        Object.setPrototypeOf(this, NetworkError);
    }
}
