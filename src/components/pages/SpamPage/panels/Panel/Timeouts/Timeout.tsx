import { FC } from 'react';
import css from './Timeout.module.scss';

type TimeoutProps = {
    seconds: number,
    repeat: number,
    cycle: number,
}

export const Timeout: FC<TimeoutProps> = (props) => {
    return (
        <div className={ css.PanelTimeout }>
            <div className={ css.inputs }>
                <input
                    value={ props.seconds }
                    className={ `${css.input} ${css.numberInput}` }
                    type="text"
                />
                <input
                    value={ props.repeat }
                    className={ `${css.input} ${css.numberInput}` }
                    type="text"
                />
                <input
                    value={ props.cycle }
                    className={ `${css.input} ${css.numberInput}` }
                    type="text"
                />
            </div>
            <div className={ css.controls }>
                <button className={ css.deleteButton }>-</button>
            </div>
        </div>
    );
};
