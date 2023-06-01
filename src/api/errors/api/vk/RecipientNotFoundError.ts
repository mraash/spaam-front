import { ApiError } from '../ApiError';

export class RecipientNotFoundError extends ApiError {
    public constructor() {
        super('Recipient not found.');
        Object.setPrototypeOf(this, RecipientNotFoundError.prototype);
    }
}
