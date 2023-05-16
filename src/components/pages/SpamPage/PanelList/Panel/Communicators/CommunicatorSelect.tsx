import { ChangeEvent, FC } from 'react';
import { useAppDispatch } from '~/hooks/redux';
import { panelActions } from '~/gstate/slices/panelSlice';
import css from './Communicator.module.scss';

type CommunicatorSelectProps = {
    panelId: number,
    title: string,
    options: Array<{
        isSelected: boolean,
        id: number,
        name: string,
    }>,
};

export const CommunicatorSelect: FC<CommunicatorSelectProps> = (props) => {
    const dispatch = useAppDispatch();

    const selectedValue = (props.options.find((option) => option.isSelected))?.id;
    const nullOptionValue = 'random string';

    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const senderValue = e.target.value;

        dispatch(panelActions.setSenderId({
            id: props.panelId,
            senderId: senderValue === nullOptionValue ? null : +senderValue,
        }));
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
                    <option key={ -1 } value={ nullOptionValue }>
                        ---
                    </option>
                    { props.options.map((option, index) => {
                        return (
                            <option key={ index } value={ option.id }>
                                { option.name }
                            </option>
                        );
                    }) }
                </select>
            </div>
        </div>
    );
};
