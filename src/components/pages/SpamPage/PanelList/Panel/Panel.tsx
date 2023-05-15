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
    isActive: boolean,
    error: string|null,
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
    let prewall = null;

    if (props.isActive) prewall = <TimerPrewall panelId={ props.id }/>;
    if (props.error !== null) prewall = <ErrorPrewall panelId={ props.id } message={ props.error } />;

    return (
        <div className={ css.Panel }>
            { prewall }
            <div className={ css.topControlsWr }>
                <TopControls panelId={ props.id } />
            </div>
            <div className={ css.communicatorsWr }>
                <Communicators panelId={ props.id } senders={ props.senders } recipient={ props.recipient } />
            </div>
            <div className={ css.textsWr }>
                <Texts panelId={ props.id } texts={ props.texts }/>
            </div>
            <div className={ css.timersWr }>
                <Timers panelId={ props.id } config={ props.timerConfig }/>
            </div>
        </div>
    );
};
