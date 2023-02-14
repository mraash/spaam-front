import { FC } from 'react';
import css from './Timeouts.module.scss';
import { Timeout, TimeoutProps } from './Timeout';
import { useAppDispatch } from '~/hooks/redux';
import { panelsActions } from '~/gstate/slices/panels-slice';

type TimeoutsProps = {
    id: number,
    config: Array<{
        seconds: number,
        repeat: number,
    }>,
}

export const Timeouts: FC<TimeoutsProps> = (props) => {
    const dispatch = useAppDispatch();

    const onAddTimeoutButton = () => {
        dispatch(panelsActions.addEmptyTimer(props.id));
    };

    return (
        <div className={ css.PanelTimeouts }>

            <div className={ css.header }>
                <h4 className={ css.title }>
                    Timeout config
                </h4>
                <div className={ css.addButtonWr }>
                    <button
                        className={ css.addButton }
                        onClick={ onAddTimeoutButton }
                    >+</button>
                </div>
            </div>

            <ul className={ css.timeoutList }>
                { props.config.map((timeout, index) => {
                    return (
                        <li key={ Math.random() } className={ css.timeoutWr }>
                            <Timeout
                                id={ props.id }
                                timerIndex={ index }
                                { ...timeout }
                            />
                        </li>
                    );
                }) }
            </ul>

        </div>
    );
};
