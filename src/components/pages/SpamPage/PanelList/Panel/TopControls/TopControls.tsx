import { FC } from 'react';
import css from './TopControls.module.scss';
import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { panelActions } from '~/gstate/slices/panelSlice';
import { panelThunks } from '~/gstate/thunks/panelThunks';
import { TextButton } from '~/components/ui-kit/buttons/TextButton';

type TopControlsProps = {
    id: number,
};

let isSpamActive = false;
let currentIndex = 0;
let timeouts: number[] = [];
let currentTimeout: NodeJS.Timeout|null = null;

export const TopControls: FC<TopControlsProps> = (props) => {
    const dispatch = useAppDispatch();
    const panel = useAppSelector((state) => state.panels.list.find((item) => item.id === props.id)!);

    const sendOnce = async (): Promise<string|true|undefined> => {
        const response = await dispatch(panelThunks.sendOnce(props.id));
        console.log(`${panel.recipient}: ${response.payload}`);

        return response.payload;
    };

    const startSpam = async () => {
        panel.timers.forEach((timer) => {
            for (let i = 1; i <= (timer.repeat ?? 0); i++) {
                if (timer.seconds !== null) {
                    timeouts.push(timer.seconds * 1000);
                }
            }
        });

        const result = await sendOnce();

        if (result !== true) {
            stopSpam();
            return;
        }

        isSpamActive = true;

        const sendInfinitiveTimes = () => {
            if (!isSpamActive) {
                return;
            }

            currentTimeout = setTimeout(async () => {
                const result = await sendOnce();

                if (result !== true) {
                    stopSpam();
                    return;
                }

                currentIndex++;

                if (currentIndex >= timeouts.length) {
                    currentIndex = 0;
                }

                sendInfinitiveTimes();
            }, timeouts[currentIndex]);
        };

        sendInfinitiveTimes();
    };

    const stopSpam = () => {
        console.log('stop');
        isSpamActive = false;
        currentIndex = 0;
        timeouts = [];

        if (currentTimeout) {
            clearTimeout(currentTimeout);
            currentTimeout = null;
        }
    };

    const onStartButton = () => {
        startSpam();
    };

    const onDeleteButton = () => {
        dispatch(panelActions.remove(props.id));
    };

    return (
        <div className={ css.TopControls }>
            <ul className={ css.controlList }>
                <li className={ css.controlWr }>
                    <TextButton text='Start' color='success' size={ 300 } onClick={ onStartButton } />
                </li>
                <li className={ css.controlWr }>
                    <TextButton text='Delete' color='danger' size={ 300 } onClick={ onDeleteButton } />
                </li>
            </ul>
        </div>
    );
};
