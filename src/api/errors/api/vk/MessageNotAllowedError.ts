import { ApiError } from '../ApiError';

export class MessageNotAllowedError extends ApiError {
    public constructor() {
        super('Message not allowed.');
        Object.setPrototypeOf(this, MessageNotAllowedError.prototype);
    }
}
