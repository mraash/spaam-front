import { FC } from 'react';
import css from './Panel.module.scss';
import { TopControls } from './TopControls';
import { Communicators } from './Communicators';
import { Timeouts } from './Timeouts';

export type PanelProps = {
    isActive: boolean,
    senders: Array<{
        isSelected: boolean,
        name: string,
    }>,
    recipients: Array<{
        isSelected: boolean,
        name: string,
    }>,
    timeoutConfig: Array<{
        seconds: number,
        repeat: number,
        cycle: number,
    }>
}

export const Panel: FC<PanelProps> = (props) => {
    return (
        <div className={ css.Panel }>
            <div className={ css.topControlsWr }>
                <TopControls isPanelActive={ props.isActive }/>
            </div>
            <div className={ css.communicatorsWr }>
                <Communicators senders={ props.senders } recipients={ props.recipients } />
            </div>
            <div className={ css.timeoutsWr }>
                <Timeouts config={ props.timeoutConfig }/>
            </div>
        </div>
    );
};
