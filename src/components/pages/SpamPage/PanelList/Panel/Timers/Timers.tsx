import { FC } from 'react';
import css from './Timers.module.scss';
import { Timer, TimerProps } from './Timer';
import { useAppDispatch } from '~/hooks/redux';
import { panelActions } from '~/gstate/slices/panelSlice';
import { SquareButton } from '~/components/ui-kit/buttons/SquareButton';
import { cn } from '~/libraries/class-name';

type TimersProps = {
    panelId: number,
    config: Array<{
        seconds: number|null,
        repeat: number|null,
    }>,
};

export const Timers: FC<TimersProps> = (props) => {
    const dispatch = useAppDispatch();

    const onAddTimerButton = () => {
        dispatch(panelActions.addEmptyTimer(props.panelId));
    };

    return (
        <div className={ css.PanelTimers }>

            <div className={ css.header }>
                <h4 className={ css.titles }>
                    <span className={ cn(css.title, css.title_timer) }>Timeout (seconds)</span>
                    <span className={ cn(css.title, css.title_repeat) }>Repeat</span>
                </h4>
                <div className={ css.addButtonWr }>
                    <SquareButton icon='add' color='success' size={ 400 } onClick={ onAddTimerButton } />
                </div>
            </div>

            <ul className={ css.timerList }>
                { props.config.map((timer, index) => {
                    return (
                        <li key={ index } className={ css.timerWr }>
                            <Timer
                                panelId={ props.panelId }
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
