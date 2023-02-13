import { FC } from 'react';
import { Text } from './Text';
import css from './Texts.module.scss';

type TextsProps = {
    texts: string[],
}

export const Texts: FC<TextsProps> = (props) => {
    const onTextInput = () => {
        console.log('test tap');
    };

    return (
        <div className={ css.Texts }>
            <div className={ css.header }>
                <div className={ css.title }>
                    Texts
                </div>
                <div className={ css.addButtonWr }>
                    <button className={ css.addButton }>+</button>
                </div>
            </div>
            { props.texts.map((text) => {
                return (
                    <div className={ css.textareaWr } key={ Math.random() }>
                        <Text text={ text }/>
                    </div>
                );
            }) }
        </div>
    );
};
