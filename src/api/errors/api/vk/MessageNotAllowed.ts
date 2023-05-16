import { ApiError } from '../ApiError';

export class MessageNotAllowed extends ApiError {
    public constructor() {
        super('Message not allowed.');
        Object.setPrototypeOf(this, MessageNotAllowed.prototype);
    }
}
