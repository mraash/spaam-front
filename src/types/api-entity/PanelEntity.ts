import { VkAccount } from './VkAccount';

export type PanelEntity = {
    id: number,
    sender: VkAccount,
    recipient: string,
    texts: string[],
    timers: Array<{
        seconds: number|null,
        repeat: number|null,
    }>,
};
