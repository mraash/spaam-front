import { FC } from 'react';
import css from './Panel.module.scss';
import { TopControls } from './TopControls';
import { Communicators } from './Communicators';
import { Timers } from './Timers';
import { Texts } from './Texts';

export type PanelProps = {
    id: number,
    isActive: boolean,
    senders: Array<{
        isSelected: boolean,
        name: string,
    }>,
    recipient: string,
    texts: string[],
    timerConfig: Array<{
        seconds: number,
        repeat: number,
    }>,
};

export const Panel: FC<PanelProps> = (props) => {
    return (
        <div className={ css.Panel }>
            <div className={ css.topControlsWr }>
                <TopControls id={ props.id } isPanelActive={ props.isActive }/>
            </div>
            <div className={ css.communicatorsWr }>
                <Communicators senders={ props.senders } recipient={ props.recipient } />
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
