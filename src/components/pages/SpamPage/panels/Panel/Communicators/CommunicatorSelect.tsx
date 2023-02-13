import { FC } from 'react';
import css from './Communicator.module.scss';

type CommunicatorSelectProps = {
    title: string,
    options: Array<{
        isSelected: boolean,
        name: string,
    }>,
}

export const CommunicatorSelect: FC<CommunicatorSelectProps> = (props) => {
    const selectedValue = (props.options.find((option) => option.isSelected))?.name;

    const onSelect = () => {
        console.log('select sender');
    };

    return (
        <div className={ css.PanelInput }>
            <div className={ css.title }>
                { props.title }
            </div>
            <div className={ css.inputWr }>
                <select
                    className={ css.input }
                    value={ selectedValue }
                    onChange={ onSelect }
                >
                    { props.options.map((option) => {
                        return (
                            <option key={ Math.random() } value={ option.name }>
                                { option.name }
                            </option>
                        );
                    }) }
                </select>
            </div>
        </div>
    );
};
