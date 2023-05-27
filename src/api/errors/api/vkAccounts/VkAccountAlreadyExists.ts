import { ApiError } from '../ApiError';

export class VkAccountAlreadyExists extends ApiError {
    public constructor() {
        super('Vk account already exists.');
        Object.setPrototypeOf(this, VkAccountAlreadyExists.prototype);
    }
}
