import { VkAccountEntity } from './VkAccountEntity';

export interface PanelEntity {
    id: number,
    // isActive: false,
    // error: string|null,
    senderId: number,
    recipient: string,
    texts: string[],
    timers: Array<{
        seconds: number|null,
        repeat: number|null,
    }>,
}
