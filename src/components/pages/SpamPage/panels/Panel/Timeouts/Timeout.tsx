import { FC } from 'react';
import css from './Timeout.module.scss';

export type TimeoutProps = {
    seconds: number,
    repeat: number,
}

export const Timeout: FC<TimeoutProps> = (props) => {
    const onTimerInput = () => {
        console.log('timer tap');
    };

    const onRepeatInput = () => {
        console.log('on repeat tap');
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
                <button className={ css.deleteButton }>-</button>
            </div>
        </div>
    );
};
