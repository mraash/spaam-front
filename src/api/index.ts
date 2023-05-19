export { apiConsts, apiConfig } from './config';
export { apiStatus } from './status';

export * as AuthAPI from './parts/AuthAPI';
export * as UserAPI from './parts/UsersAPI';
export * as VkAccountsAPI from './parts/VkAccountsAPI';
export * as SpamPanelAPI from './parts/SpamPanelAPI';
export * as VkAPI from './parts/VkAPI';

export * as ApiErrors from './errors';

export type { UserInfo } from './infos/UserInfo';
export type { VkAccountInfo } from './infos/VkAccountInfo';
export type { SpamPanelInfo } from './infos/SpamPanelInfo';
