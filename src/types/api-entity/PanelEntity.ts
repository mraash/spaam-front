export type PanelEntity = {
    id: number,
    sender: string,
    recipient: string,
    texts: string[],
    timers: Timer[],
};

type Timer = {
    seconds: number,
    repeat: number,
};
