import { ApiError } from '../base/ApiError';

export class CaptchaNeeded extends ApiError {
    public constructor() {
        super('Captcha needed.');
        Object.setPrototypeOf(this, CaptchaNeeded.prototype);
    }
}
