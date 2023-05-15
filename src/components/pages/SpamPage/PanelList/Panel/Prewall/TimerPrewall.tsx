import { FC } from 'react';
import css from './TimerPrewall.module.scss';
import { useAppSelector } from '~/hooks/redux';
import { TextButton } from '~/components/ui-kit/buttons/TextButton';

type TimerPrewallProps = {
    panelId: number,
};

export const TimerPrewall: FC<TimerPrewallProps> = (props) => {
    const panel = useAppSelector((state) => state.panels.list.find((item) => item.id === props.panelId)!);

    const onStopButton = () => {
        panel.spammer.stop();
    };

    return (
        <div className={ css.TimerPrewall }>
            <div className={ css.stopButtonWr }>
                <TextButton text='Stop' color='danger' size={ 500 } onClick={ onStopButton }/>
            </div>
        </div>
    );
};
