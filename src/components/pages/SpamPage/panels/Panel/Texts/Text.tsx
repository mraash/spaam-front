import { FC } from 'react';
import css from './Text.module.scss';

type TextProps = {
    text: string,
}

export const Text: FC<TextProps> = (props) => {
    const onTextInput = () => {
        console.log('test tap');
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
                <button className={ css.deleteButton }>-</button>
            </div>
        </div>
    );
};
