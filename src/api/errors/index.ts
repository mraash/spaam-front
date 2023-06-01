export { BaseApiError } from './BaseApiError';
export { NetworkError } from './NetworkError';
export { UnknownApiError } from './UnknownApiError';

export { ApiError } from './api/ApiError';
export { UndefinedApiError } from './api/UndefinedApiError';

export { EmailIsTakenError } from './api/auth/EmailIsTakenError';
export { InvalidCredentialsError } from './api/auth/InvalidCredentialsError';
export { InvalidRefreshTokenError } from './api/auth/InvalidRefreshTokenError';
export { JwtTokenExpiredError } from './api/auth/JwtTokenExpiredError';
export { JwtTokenNotFoundError } from './api/auth/JwtTokenNotFoundError';

export { CaptchaNeededError } from './api/vk/CaptchaNeededError';
export { MessageNotAllowedError } from './api/vk/MessageNotAllowedError';
export { RecipientNotFoundError } from './api/vk/RecipientNotFoundError';
export { UserIsBlockedError } from './api/vk/UserIsBlockedError';

export { VkAccountAlreadyExistsError } from './api/vkAccounts/VkAccountAlreadyExistsError';
