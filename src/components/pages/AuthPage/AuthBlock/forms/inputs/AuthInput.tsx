import { FC, HTMLProps } from 'react';
import { cn } from '~/libraries/class-name';
import css from './AuthInput.module.scss';

interface AuthInputProps extends HTMLProps<HTMLInputElement> {
    title: string,
    error?: string,
}

export const AuthInput: FC<AuthInputProps> = (props) => {
    return (
        <div className={ css.AuthInput }>
            <div className={ css.titleWr }>
                <div className={ css.title }>
                    { props.title }
                </div>
            </div>
            <div className={ css.inputWr }>
                <input
                    className={ cn(css.input, [props.error, css.input_error]) }
                    type="text"
                    { ...props }
                />
            </div>
            { props.error &&
                <div className={ css.errorBox }>{ props.error }</div>
            }
        </div>
    );
};
