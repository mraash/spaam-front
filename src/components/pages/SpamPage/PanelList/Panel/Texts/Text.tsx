import { FC, ChangeEvent } from 'react';
import { panelActions } from '~/gstate/slices/panelSlice';
import { useAppDispatch } from '~/hooks/redux';
import css from './Text.module.scss';
import { SquareButton } from '~/components/ui-kit/buttons/SquareButton';

type TextProps = {
    panelId: number,
    index: number,
    text: string,
};

export const Text: FC<TextProps> = (props) => {
    const dispatch = useAppDispatch();

    const onTextInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(panelActions.setText({
            id: props.panelId,
            textIndex: props.index,
            value: event.target.value,
        }));
    };

    const onDeleteTextButton = () => {
        dispatch(panelActions.removeText({
            id: props.panelId,
            textIndex: props.index,
        }));
    };

    return (
        <div className={ css.Text }>
            <div className={ css.textareaWr }>
                <textarea
                    className={ css.textarea }
                    value={ props.text }
                    onChange={ onTextInput }
                />
            </div>
            <div className={ css.controls }>
                <SquareButton icon='remove' color='danger' size={ 400 } onClick={ onDeleteTextButton }/>
            </div>
        </div>
    );
};
