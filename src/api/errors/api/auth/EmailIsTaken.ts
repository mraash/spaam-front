import { ApiError } from '../ApiError';

export class EmailIsTaken extends ApiError {
    public constructor() {
        super('Email is taken.');
        Object.setPrototypeOf(this, EmailIsTaken.prototype);
    }
}
