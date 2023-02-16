import { FC, ChangeEvent } from 'react';
import { panelsActions } from '~/gstate/slices/panels-slice';
import { useAppDispatch } from '~/hooks/redux';
import css from './Timer.module.scss';

export type TimerProps = {
    id: number,
    timerIndex: number,
    seconds: number|null,
    repeat: number|null,
}

export const Timer: FC<TimerProps> = (props) => {
    const dispatch = useAppDispatch();

    const onTimerInput = (event: ChangeEvent<HTMLInputElement>) => {
        const secondsInput = event.target.value;
        const seconds = inputToInteger(secondsInput, props.seconds);

        dispatch(panelsActions.setTimerSeconds({
            id: props.id,
            timerIndex: props.timerIndex,
            seconds,
        }));
    };

    const onRepeatInput = (event: ChangeEvent<HTMLInputElement>) => {
        const repeatInput = event.target.value;
        const repeat = inputToInteger(repeatInput, props.repeat);

        dispatch(panelsActions.setTimerRepeat({
            id: props.id,
            timerIndex: props.timerIndex,
            repeat,
        }));
    };

    const onDeleteTimerButton = () => {
        dispatch(panelsActions.removeTimer({
            id: props.id,
            timerIndex: props.timerIndex,
        }));
    };

    return (
        <div className={ css.PanelTimer }>
            <div className={ css.inputs }>
                <input
                    className={ `${css.input} ${css.input_timer}` }
                    value={ props.seconds ?? '' }
                    type="text"
                    onChange={ onTimerInput }
                />
                <input
                    className={ `${css.input} ${css.input_repeat}` }
                    value={ props.repeat ?? '' }
                    type="text"
                    onChange={ onRepeatInput }
                />
            </div>
            <div className={ css.controls }>
                <button
                    className={ css.deleteButton }
                    onClick={ onDeleteTimerButton }
                >-</button>
            </div>
        </div>
    );
};

function inputToInteger(input: string, defaulReturn: number|null): number|null {
    if (input === '') {
        return null;
    }

    if (Number.isInteger(parseInt(input, 10))) {
        return parseInt(input, 10);
    }

    return defaulReturn;
}
