import { ButtonHTMLAttributes, FC } from 'react';
import css from './TextButton.module.scss';

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string|number|boolean,
    size?: 300|400|500,
    color: 'main'|'success'|'danger'|'info',
}

export const TextButton: FC<TextButtonProps> = ({ text, size = 500, color, ...buttonProps }) => {
    const sizeClass = `size_${size}`;
    const colorClass = `color_${color}`;

    const classes = `${css.TextButton} ${css[sizeClass]} ${css[colorClass]}`;

    buttonProps.className = `${(buttonProps.className ?? '')} ${classes}`;
    buttonProps.children = buttonProps.children ?? text;

    return (
        <button { ...buttonProps }></button>
    );
};
