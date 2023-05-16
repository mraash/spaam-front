import { BaseApiError } from './BaseApiError';

export class UnknownApiError extends BaseApiError {
    public constructor() {
        super('Something went wrong.');
        Object.setPrototypeOf(this, UnknownApiError);
    }
}
