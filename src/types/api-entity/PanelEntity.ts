import { VkAccount } from './VkAccount';

export type PanelEntity = {
    id: number,
    sender: VkAccount,
    recipient: string,
    texts: string[],
    timers: Timer[],
};

type Timer = {
    seconds: number,
    repeat: number,
};
