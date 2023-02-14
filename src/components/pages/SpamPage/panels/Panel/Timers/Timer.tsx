import { FC } from 'react';
import { panelsActions } from '~/gstate/slices/panels-slice';
import { useAppDispatch } from '~/hooks/redux';
import css from './Timer.module.scss';

export type TimerProps = {
    id: number,
    timerIndex: number,
    seconds: number,
    repeat: number,
}

export const Timer: FC<TimerProps> = (props) => {
    const dispatch = useAppDispatch();

    const onTimerInput = () => {
        console.log('timer tap');
    };

    const onRepeatInput = () => {
        console.log('on repeat tap');
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
                    value={ props.seconds }
                    type="text"
                    onChange={ onTimerInput }
                />
                <input
                    className={ `${css.input} ${css.input_repeat}` }
                    value={ props.repeat }
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
