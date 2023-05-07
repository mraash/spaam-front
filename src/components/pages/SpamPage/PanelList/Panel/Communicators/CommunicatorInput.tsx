import { ChangeEvent, FC } from 'react';
import { panelActions } from '~/gstate/slices/panelSlice';
import { useAppDispatch } from '~/hooks/redux';
import css from './Communicator.module.scss';

type CommunicatorInputProps = {
    panelId: number,
    title: string,
    value: string,
};

export const CommunicatorInput: FC<CommunicatorInputProps> = (props) => {
    const dispatch = useAppDispatch();

    const onInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        dispatch(panelActions.setRecipient({
            id: props.panelId,
            value,
        }));
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
