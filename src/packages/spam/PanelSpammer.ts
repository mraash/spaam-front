import { store } from '~/gstate/store';
import { panelActions } from '~/gstate/slices/panelSlice';
import { VkAPI } from '~/api';

export class PanelSpammer {
    private reduxStore = store;

    private panelId: number;

    private senderId: number|null;
    private recipient: string|null;
    private texts: string[]|null;
    private timeouts: number[]|null; // In miliseconds.

    private currentTimeoutIndex: number = 0;
    private currentTimeout: NodeJS.Timeout|null = null;

    public constructor(panelId: number) {
        this.panelId = panelId;

        this.senderId = null;
        this.recipient = null;
        this.texts = null;
        this.timeouts = null;
    }

    public isActive(): boolean {
        return this.currentTimeout !== null;
    }

    public start(): void {
        if (this.isActive()) {
            throw new Error('Can\'t start a spam process while one process is already active.');
        }

        this.reduxStore.dispatch(panelActions.setIsActive({
            id: this.panelId,
            isActive: true,
        }));

        const panel = this.reduxStore.getState().panels.list.find((panel) => panel.id === this.panelId)!;

        this.senderId = panel.senderId!;
        this.recipient = panel.recipient;
        this.texts = panel.texts;
        this.timeouts = this.buildTimeouts(panel.timers);

        this.sendOnceOrError().then((isSuccess) => {
            if (isSuccess) {
                this.sendInfinitive();
            }
        });
    }

    public stop(): void {
        console.log('stop');

        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
        }

        this.currentTimeoutIndex = 0;
        this.currentTimeout = null;

        this.senderId = null;
        this.recipient = null;
        this.texts = null;
        this.timeouts = null;

        this.reduxStore.dispatch(panelActions.setIsActive({
            id: this.panelId,
            isActive: false,
        }));
    }

    private sendInfinitive() {
        const timeout = this.timeouts![this.currentTimeoutIndex];

        this.currentTimeout = setTimeout(async () => {
            if (!this.isActive()) {
                this.stop();
                return;
            }

            const isSuccess = await this.sendOnceOrError();

            if (!isSuccess) {
                this.stop();
                return;
            }

            const maxIndex = this.timeouts!.length - 1;

            this.currentTimeoutIndex = (this.currentTimeoutIndex >= maxIndex) ? 0 : this.currentTimeoutIndex + 1;

            this.sendInfinitive();
        }, timeout);
    }

    /**
     * @returns True if the message was sent successfully, false otherwise.
     */
    private async sendOnceOrError(): Promise<boolean> {
        const sendingResult = await this.sendOnce();

        if (typeof sendingResult === 'string') {
            this.stop();

            this.reduxStore.dispatch(panelActions.setError({
                id: this.panelId,
                error: sendingResult,
            }));

            this.reduxStore.dispatch(panelActions.setIsActive({
                id: this.panelId,
                isActive: false,
            }));

            return false;
        }

        return true;
    }

    /**
     * @returns Error message or true.
     */
    private async sendOnce(): Promise<true|string> {
        // // Uncomment to mock sending.
        // await new Promise((resolve) => {
        //     setTimeout(() => {
        //         console.log('send');
        //         resolve(1);
        //     }, 200);
        // });

        // return Math.random() > 0.9 ? 'Error from PanelSpammer.' : true;

        try {
            console.log('send');

            await VkAPI.send(this.senderId!, this.recipient!, this.getRandomText());

            return true;
        }
        catch (err) {
            return (err as Error).message;
        }
    }

    private buildTimeouts(timers: Array<{ seconds: number|null, repeat: number|null }>): number[] {
        const timeouts: number[] = [];

        timers.forEach((timer) => {
            if (timer.repeat === null || timer.seconds === null) {
                return;
            }

            for (let i = 1; i <= (timer.repeat ?? 0); i++) {
                if (timer.seconds !== null) {
                    timeouts.push(timer.seconds * 1000);
                }
            }
        });

        return timeouts;
    }

    private getRandomText(): string {
        return this.texts![Math.floor(Math.random() * this.texts!.length)];
    }
}
