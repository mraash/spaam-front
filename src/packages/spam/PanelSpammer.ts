import { store } from '~/gstate/store';
import { panelActions } from '~/gstate/slices/panelSlice';
import { VkAPI } from '~/api';

// todo: remove redux store from here.
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

        const timers = this.validateTimers(panel.timers);
        const texts = this.validateTexts(panel.texts);
        const recipient = this.validateRecipient(panel.recipient);
        const senderId = this.validateSenderId(panel.senderId);

        if (senderId === undefined || recipient === undefined || texts === undefined || timers === undefined) {
            this.stop();
            return;
        }

        this.senderId = senderId;
        this.recipient = recipient;
        this.texts = texts;
        this.timeouts = this.buildTimeouts(timers);

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
        // Uncomment to mock sending.
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log(`send (${this.recipient}): ${this.getRandomText()}`);
                resolve(1);
            }, 200);
        });

        return Math.random() > 0.9 ? 'Error from code.' : true;

        // try {
        //     console.log('send');

        //     await VkAPI.send(this.senderId!, this.recipient!, this.getRandomText());

        //     return true;
        // }
        // catch (err) {
        //     return (err as Error).message;
        // }
    }

    private buildTimeouts(timers: Array<{ seconds: number, repeat: number }>): number[] {
        const timeouts: number[] = [];

        timers.forEach((timer) => {
            for (let i = 1; i <= timer.repeat; i++) {
                timeouts.push(timer.seconds * 1000);
            }
        });

        return timeouts;
    }

    private getRandomText(): string {
        return this.texts![Math.floor(Math.random() * this.texts!.length)];
    }

    private validateSenderId(senderId: number|null): number|undefined {
        if (senderId === null) {
            this.showError('Sender must be selected.');

            return undefined;
        }

        return senderId!;
    }

    private validateRecipient(recipient: string): string|undefined {
        if (recipient === '') {
            this.showError('Recipient can not be blank.');

            return undefined;
        }

        return recipient;
    }

    private validateTexts(texts: string[]): string[]|undefined {
        if (texts.length === 0) {
            this.showError('There should be at least 1 text.');

            return undefined;
        }

        for (let i = 0; i < texts.length; i++) {
            if (texts[i] === '') {
                this.showError('Text can not be blank.');

                return undefined;
            }
        }

        return texts;
    }

    private validateTimers(
        timers: Array<{ seconds: number|null, repeat: number|null }>,
    ): Array<{ seconds: number, repeat: number }>|undefined {
        if (timers.length === 0) {
            this.showError('There should be at least 1 timeout.');

            return undefined;
        }

        for (let i = 0; i < timers.length; i++) {
            const { seconds, repeat } = timers[i];

            if (seconds === null || seconds === 0) {
                this.showError('Timeout can not be blank.');

                return undefined;
            }

            if (seconds < 3) {
                this.showError('Timeout minimum value is 3.');

                return undefined;
            }

            if (repeat === null || repeat === 0) {
                this.showError('Repeat can not be blank.');

                return undefined;
            }

            if (repeat < 1) {
                this.showError('Repeat minimum value is 1.');

                return undefined;
            }
        }

        return timers as Array<{ seconds: number, repeat: number }>;
    }

    private showError(message: string): void {
        this.reduxStore.dispatch(panelActions.setError({
            id: this.panelId,
            error: message,
        }));
    }
}
