import { VkAccountEntity } from './VkAccountEntity';

export type PanelEntity = {
    id: number,
    sender: VkAccountEntity,
    recipient: string,
    texts: string[],
    timers: Array<{
        seconds: number|null,
        repeat: number|null,
    }>,
};
