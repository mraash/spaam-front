import { SingleSpammer } from '~/packages/spam';

export interface PanelEntity {
    id: number,
    spammer: SingleSpammer,
    isActive: boolean,
    error: string|null,
    senderId: number,
    recipient: string,
    texts: string[],
    timers: Array<{
        seconds: number|null,
        repeat: number|null,
    }>,
}
