import { VkAccountEntity } from './VkAccountEntity';

export interface PanelEntity {
    id: number,
    senderId: number,
    recipient: string,
    texts: string[],
    timers: Array<{
        seconds: number|null,
        repeat: number|null,
    }>,
}
