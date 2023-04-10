import { FC } from 'react';
import css from './Timers.module.scss';
import { Timer, TimerProps } from './Timer';
import { useAppDispatch } from '~/hooks/redux';
import { panelActions } from '~/gstate/slices/panelSlice';

type TimersProps = {
    id: number,
    config: Array<{
        seconds: number|null,
        repeat: number|null,
    }>,
};

export const Timers: FC<TimersProps> = (props) => {
    const dispatch = useAppDispatch();

    const onAddTimerButton = () => {
        dispatch(panelActions.addEmptyTimer(props.id));
    };

    return (
        <div className={ css.PanelTimers }>

            <div className={ css.header }>
                <h4 className={ css.title }>
                    Timer config
                </h4>
                <div className={ css.addButtonWr }>
                    <button
                        className={ css.addButton }
                        onClick={ onAddTimerButton }
                    >+</button>
                </div>
            </div>

            <ul className={ css.timerList }>
                { props.config.map((timer, index) => {
                    return (
                        <li key={ index } className={ css.timerWr }>
                            <Timer
                                id={ props.id }
                                timerIndex={ index }
                                { ...timer }
                            />
                        </li>
                    );
                }) }
            </ul>

        </div>
    );
};
