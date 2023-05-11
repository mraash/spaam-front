import { ApiError } from '../base/ApiError';

export class RecipientNotFound extends ApiError {
    public constructor() {
        super('Recipient not found.');
        Object.setPrototypeOf(this, RecipientNotFound.prototype);
    }
}