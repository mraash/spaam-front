import { VkAccountInfo } from './VkAccountInfo';

export type SpamPanelInfo = {
    id: number,
    sender: VkAccountInfo|null,
    recipient: string,
    texts: Array<string>,
    timers: Array<{
        seconds: number,
        repeat: number,
    }>,
};
