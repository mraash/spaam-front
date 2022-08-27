import { FC } from 'react';
import css from './Communicator.module.scss';

type CommunicatorProps = {
    title: string,
    options: Array<{
        isSelected: boolean,
        name: string,
    }>,
}

export const Communicator: FC<CommunicatorProps> = (props) => {
    const selectedValue = (props.options.find((option) => option.isSelected))?.name;

    return (
        <div className={ css.PanelInput }>
            <div className={ css.title }>
                { props.title }
            </div>
            <div className={ css.selectWr }>
                <select className={ css.select } value={ selectedValue }>
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
