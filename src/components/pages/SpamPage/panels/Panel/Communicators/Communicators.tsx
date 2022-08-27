import { FC } from 'react';
import css from './Communicators.module.scss';
import { Communicator } from './Communicator';

type CommunicatorsProps = {
    senders: Array<{
        isSelected: boolean,
        name: string,
    }>,
    recipients: Array<{
        isSelected: boolean,
        name: string,
    }>,
}

export const Communicators: FC<CommunicatorsProps> = (props) => {
    return (
        <ul className={ css.Communicators }>
            <li className={ css.inputWr }>
                <Communicator title='From' options={ props.senders }/>
            </li>
            <li className={ css.inputWr }>
                <Communicator title='To' options={ props.recipients }/>
            </li>
        </ul>
    );
};
