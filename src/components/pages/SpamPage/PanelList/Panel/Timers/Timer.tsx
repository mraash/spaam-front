import { FC, ChangeEvent } from 'react';
import { panelActions } from '~/gstate/slices/panelSlice';
import { useAppDispatch } from '~/hooks/redux';
import css from './Timer.module.scss';
import { SquareButton } from '~/components/ui-kit/buttons/SquareButton';

export type TimerProps = {
    panelId: number,
    timerIndex: number,
    seconds: number|null,
    repeat: number|null,
};

export const Timer: FC<TimerProps> = (props) => {
    const dispatch = useAppDispatch();

    const onTimerInput = (event: ChangeEvent<HTMLInputElement>) => {
        const secondsInput = event.target.value;
        const seconds = inputToInteger(secondsInput, props.seconds);

        dispatch(panelActions.setTimerSeconds({
            id: props.panelId,
            timerIndex: props.timerIndex,
            seconds,
        }));
    };

    const onRepeatInput = (event: ChangeEvent<HTMLInputElement>) => {
        const repeatInput = event.target.value;
        const repeat = inputToInteger(repeatInput, props.repeat);

        dispatch(panelActions.setTimerRepeat({
            id: props.panelId,
            timerIndex: props.timerIndex,
            repeat,
        }));
    };

    const onDeleteTimerButton = () => {
        dispatch(panelActions.removeTimer({
            id: props.panelId,
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
                <SquareButton icon='remove' color='danger' size={ 400 } onClick={ onDeleteTimerButton } />
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
