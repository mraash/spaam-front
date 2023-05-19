import { PanelSpammer } from '~/packages/spam';

export interface PanelEntity {
    id: number,
    spammer: PanelSpammer,
    isActive: boolean,
    error: string|null,
    senderId: number|null,
    recipient: string,
    texts: string[],
    timers: Array<{
        seconds: number|null,
        repeat: number|null,
    }>,
}
