import { FC } from 'react';
import css from './Timeouts.module.scss';
import { Timeout } from './Timeout';

type TimeoutsProps = {
    config: Array<{
        seconds: number,
        repeat: number,
        cycle: number,
    }>,
}

export const Timeouts: FC<TimeoutsProps> = (props) => {
    return (
        <div className={ css.PanelTimeouts }>

            <div className={ css.header }>
                <h4 className={ css.title }>
                    Timeout config
                </h4>
                <div className={ css.addButtonWr }>
                    <button className={ css.addButton }>+</button>
                </div>
            </div>

            <ul className={ css.timeoutList }>
                { props.config.map((timeout) => {
                    return (
                        <li key={ Math.random() } className={ css.timeoutWr }>
                            <Timeout { ...timeout }/>
                        </li>
                    );
                }) }
            </ul>

        </div>
    );
};
