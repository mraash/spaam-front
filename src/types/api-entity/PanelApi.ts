import { VkAccountApi } from './VkAccountApi';

export type PanelApi = {
    id: number,
    sender: VkAccountApi,
    recipient: string,
    texts: string[],
    timers: Array<{
        seconds: number|null,
        repeat: number|null,
    }>,
};
