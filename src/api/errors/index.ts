export { BaseApiError } from './BaseApiError';
export { NetworkError } from './NetworkError';
export { UnknownApiError } from './UnknownApiError';

export { ApiError } from './api/ApiError';
export { UnknownServerError } from './api/UnknownServerError';

export { EmailIsTaken } from './api/auth/EmailIsTaken';
export { InvalidCredentials } from './api/auth/InvalidCredentials';
export { InvalidRefreshToken } from './api/auth/InvalidRefreshToken';
export { JwtTokenNotFound } from './api/auth/JwtTokenNotFound';

export { MessageNotAllowed } from './api/vk/MessageNotAllowed';
export { RecipientNotFound } from './api/vk/RecipientNotFound';
export { CaptchaNeeded } from './api/vk/CaptchaNeeded';
