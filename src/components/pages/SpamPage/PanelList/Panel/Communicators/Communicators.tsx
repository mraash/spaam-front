import { FC } from 'react';
import css from './Communicators.module.scss';
import { CommunicatorSelect } from './CommunicatorSelect';
import { CommunicatorInput } from './CommunicatorInput';

type CommunicatorsProps = {
    panelId: number,
    senders: Array<{
        isSelected: boolean,
        id: number,
        name: string,
    }>,
    recipient: string,
};

export const Communicators: FC<CommunicatorsProps> = (props) => {
    return (
        <ul className={ css.Communicators }>
            <li className={ css.inputWr }>
                <CommunicatorSelect panelId={ props.panelId } title='From' options={ props.senders }/>
            </li>
            <li className={ css.inputWr }>
                <CommunicatorInput panelId={ props.panelId } title='To' value={ props.recipient }/>
            </li>
        </ul>
    );
};
