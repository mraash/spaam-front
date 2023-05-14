import { FC } from 'react';
import css from './TimerPrewall.module.scss';
import { TextButton } from '~/components/ui-kit/buttons/TextButton';

type TimerPrewallProps = {
};

export const TimerPrewall: FC<TimerPrewallProps> = (props) => {
    return (
        <div className={ css.TimerPrewall }>
            <div className={ css.stopButtonWr }>
                <TextButton text='Stop' color='danger' size={ 500 } />
            </div>
        </div>
    );
};
