import { FC } from 'react';
import css from './Communicator.module.scss';

type CommunicatorInputProps = {
    title: string,
    value: string,
}

export const CommunicatorInput: FC<CommunicatorInputProps> = (props) => {
    const onInput = () => {
        console.log('resipient tap');
    };

    return (
        <div className={ css.PanelInput }>
            <div className={ css.title }>
                { props.title }
            </div>
            <div className={ css.inputWr }>
                <input
                    className={ css.input }
                    type="text"
                    value={ props.value }
                    onChange={ onInput }
                />
            </div>
        </div>
    );
};
