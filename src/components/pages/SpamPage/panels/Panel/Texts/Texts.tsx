import { FC } from 'react';
import { panelsActions } from '~/gstate/slices/panels-slice';
import { useAppDispatch } from '~/hooks/redux';
import { Text } from './Text';
import css from './Texts.module.scss';

type TextsProps = {
    id: number,
    texts: string[],
}

export const Texts: FC<TextsProps> = (props) => {
    const dispatch = useAppDispatch();

    const onAddTextButton = () => {
        dispatch(panelsActions.addEmptyText(props.id));
    };

    return (
        <div className={ css.Texts }>
            <div className={ css.header }>
                <div className={ css.title }>
                    Texts
                </div>
                <div className={ css.addButtonWr }>
                    <button
                        className={ css.addButton }
                        onClick={ onAddTextButton }
                    >+</button>
                </div>
            </div>
            { props.texts.map((text, index) => {
                return (
                    <div className={ css.textareaWr } key={ index }>
                        <Text id={ props.id } index={ index } text={ text }/>
                    </div>
                );
            }) }
        </div>
    );
};
