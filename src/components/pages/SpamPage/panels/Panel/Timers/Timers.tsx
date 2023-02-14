import { FC } from 'react';
import css from './Timers.module.scss';
import { Timer, TimerProps } from './Timer';
import { useAppDispatch } from '~/hooks/redux';
import { panelsActions } from '~/gstate/slices/panels-slice';

type TimersProps = {
    id: number,
    config: Array<{
        seconds: number,
        repeat: number,
    }>,
}

export const Timers: FC<TimersProps> = (props) => {
    const dispatch = useAppDispatch();

    const onAddTimerButton = () => {
        dispatch(panelsActions.addEmptyTimer(props.id));
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
                        <li key={ Math.random() } className={ css.timerWr }>
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
