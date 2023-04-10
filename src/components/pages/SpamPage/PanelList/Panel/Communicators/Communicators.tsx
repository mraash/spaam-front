import { FC } from 'react';
import css from './Communicators.module.scss';
import { CommunicatorSelect } from './CommunicatorSelect';
import { CommunicatorInput } from './CommunicatorInput';

type CommunicatorsProps = {
    senders: Array<{
        isSelected: boolean,
        name: string,
    }>,
    recipient: string,
};

export const Communicators: FC<CommunicatorsProps> = (props) => {
    return (
        <ul className={ css.Communicators }>
            <li className={ css.inputWr }>
                <CommunicatorSelect title='From' options={ props.senders }/>
            </li>
            <li className={ css.inputWr }>
                <CommunicatorInput title='To' value={ props.recipient }/>
            </li>
        </ul>
    );
};
