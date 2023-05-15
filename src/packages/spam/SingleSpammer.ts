import { AppDispatch, store } from '~/gstate/store';
import { panelThunks } from '~/gstate/thunks/panelThunks';
import { panelActions } from '~/gstate/slices/panelSlice';

export class SingleSpammer {
    private dispatch: AppDispatch = store.dispatch;
    private panelId: number;
    private timeouts: number[] = []; // In miliseconds.
    private currentTimeoutIndex: number = 0;
    private currentTimeout: NodeJS.Timeout|null = null;

    public constructor(panelId: number) {
        this.panelId = panelId;
    }

    public isActive(): boolean {
        return this.currentTimeout !== null;
    }

    public start(timers: Array<{ seconds: number|null, repeat: number|null }>): void {
        this.dispatch(panelActions.setIsActive({
            id: this.panelId,
            isActive: true,
        }));

        this.timeouts = this.buildTimeouts(timers);

        this.sendOnceOrError().then((isSuccess) => {
            if (isSuccess) {
                this.sendInfinitive();
            }
        });
    }

    public stop(): void {
        console.log('stop');
        this.dispatch(panelActions.setIsActive({
            id: this.panelId,
            isActive: false,
        }));

        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
        }

        this.timeouts = [];
        this.currentTimeoutIndex = 0;
        this.currentTimeout = null;
    }

    private sendInfinitive() {
        const timeout = this.timeouts[this.currentTimeoutIndex];

        this.currentTimeout = setTimeout(async () => {
            const isSuccess = await this.sendOnceOrError();

            if (!isSuccess) {
                this.stop();
                return;
            }

            const maxIndex = this.timeouts.length - 1;

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
            this.dispatch(panelActions.setError({
                id: this.panelId,
                error: sendingResult,
            }));

            this.dispatch(panelActions.setIsActive({
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
        // const payload = (await this.dispatch(panelThunks.sendOnce(this.panelId))).payload!;

        // console.log(`${this.panelId}: ${payload}`);

        // return payload;

        await new Promise((resolve) => {
            setTimeout(() => {
                console.log('send');
                resolve(1);
            }, 200);
        });

        return Math.random() > 0.9 ? 'Error from SingleSpammer. . . . . . . . . . .' : true;
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
}
