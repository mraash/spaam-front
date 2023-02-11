import { FC } from 'react';
import css from './Timeout.module.scss';

export type TimeoutProps = {
    seconds: number,
    repeat: number,
}

export const Timeout: FC<TimeoutProps> = (props) => {
    return (
        <div className={ css.PanelTimeout }>
            <div className={ css.inputs }>
                <input
                    value={ props.seconds }
                    className={ `${css.input} ${css.input_timer}` }
                    type="text"
                />
                <input
                    value={ props.repeat }
                    className={ `${css.input} ${css.input_repeat}` }
                    type="text"
                />
            </div>
            <div className={ css.controls }>
                <button className={ css.deleteButton }>-</button>
            </div>
        </div>
    );
};
