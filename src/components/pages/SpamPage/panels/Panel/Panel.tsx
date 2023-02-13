import { FC } from 'react';
import css from './Panel.module.scss';
import { TopControls } from './TopControls';
import { Communicators } from './Communicators';
import { Timeouts, TimeoutProps } from './Timeouts';
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
    timeoutConfig: TimeoutProps[],
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
                <Texts texts={ props.texts }/>
            </div>
            <div className={ css.timeoutsWr }>
                <Timeouts config={ props.timeoutConfig }/>
            </div>
        </div>
    );
};
