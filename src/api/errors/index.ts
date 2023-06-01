export { BaseApiError } from './BaseApiError';
export { NetworkError } from './NetworkError';
export { UnknownApiError } from './UnknownApiError';

export { ApiError } from './api/ApiError';
export { UndefinedApiError } from './api/UndefinedApiError';

export { EmailIsTaken } from './api/auth/EmailIsTaken';
export { InvalidCredentials } from './api/auth/InvalidCredentials';
export { InvalidRefreshToken } from './api/auth/InvalidRefreshToken';
export { JwtTokenExpired } from './api/auth/JwtTokenExpired';
export { JwtTokenNotFound } from './api/auth/JwtTokenNotFound';

export { VkAccountAlreadyExists } from './api/vkAccounts/VkAccountAlreadyExists';

export { MessageNotAllowed } from './api/vk/MessageNotAllowed';
export { RecipientNotFound } from './api/vk/RecipientNotFound';
export { CaptchaNeeded } from './api/vk/CaptchaNeeded';
export { UserIsBlockedError } from './api/vk/UserIsBlockedError';
