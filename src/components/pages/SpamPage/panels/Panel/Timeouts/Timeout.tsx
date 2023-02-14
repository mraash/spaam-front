import { FC } from 'react';
import { panelsActions } from '~/gstate/slices/panels-slice';
import { useAppDispatch } from '~/hooks/redux';
import css from './Timeout.module.scss';

export type TimeoutProps = {
    id: number,
    timerIndex: number,
    seconds: number,
    repeat: number,
}

export const Timeout: FC<TimeoutProps> = (props) => {
    const dispatch = useAppDispatch();

    const onTimerInput = () => {
        console.log('timer tap');
    };

    const onRepeatInput = () => {
        console.log('on repeat tap');
    };

    const onDeleteTimeoutButton = () => {
        dispatch(panelsActions.removeTimer({
            id: props.id,
            timerIndex: props.timerIndex,
        }));
    };

    return (
        <div className={ css.PanelTimeout }>
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
                    onClick={ onDeleteTimeoutButton }
                >-</button>
            </div>
        </div>
    );
};
