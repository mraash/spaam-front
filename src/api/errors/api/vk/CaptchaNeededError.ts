import { ApiError } from '../ApiError';

export class CaptchaNeededError extends ApiError {
    public constructor() {
        super('Captcha needed.');
        Object.setPrototypeOf(this, CaptchaNeededError.prototype);
    }
}
