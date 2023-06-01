import { ApiError } from '../ApiError';

export class VkAccountAlreadyExistsError extends ApiError {
    public constructor() {
        super('Vk account already exists.');
        Object.setPrototypeOf(this, VkAccountAlreadyExistsError.prototype);
    }
}
