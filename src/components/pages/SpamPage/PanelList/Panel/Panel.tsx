import { FC } from 'react';
import css from './Panel.module.scss';
import { TopControls } from './TopControls';
import { Communicators } from './Communicators';
import { Timers } from './Timers';
import { Texts } from './Texts';
import { ErrorPrewall } from './Prewall/ErrorPrewall';
import { TimerPrewall } from './Prewall/TimerPrewall';

export type PanelProps = {
    id: number,
    senders: Array<{
        isSelected: boolean,
        id: number,
        name: string,
    }>,
    recipient: string,
    texts: string[],
    timerConfig: Array<{
        seconds: number|null,
        repeat: number|null,
    }>,
};

export const Panel: FC<PanelProps> = (props) => {
    const isActive = false;
    const error: string|null = 'My beautiful error';

    let prewall = null;

    if (isActive) prewall = <TimerPrewall />;
    if (error !== null) prewall = <ErrorPrewall message={ error } />;

    return (
        <div className={ css.Panel }>
            { prewall }
            <div className={ css.topControlsWr }>
                <TopControls id={ props.id } />
            </div>
            <div className={ css.communicatorsWr }>
                <Communicators panelId={ props.id } senders={ props.senders } recipient={ props.recipient } />
            </div>
            <div className={ css.textsWr }>
                <Texts id={ props.id } texts={ props.texts }/>
            </div>
            <div className={ css.timersWr }>
                <Timers id={ props.id } config={ props.timerConfig }/>
            </div>
        </div>
    );
};
