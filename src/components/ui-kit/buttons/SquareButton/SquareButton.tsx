import { ButtonHTMLAttributes, FC } from 'react';
import css from './SquareButton.module.scss';

interface SquareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: 'add'|'remove',
    color: 'success'|'danger';
    size: 400,
}

export const SquareButton: FC<SquareButtonProps> = ({ icon, size, color, ...buttonProps }) => {
    const textVocabulary = {
        add: '+',
        remove: '-',
    };

    const text = textVocabulary[icon];
    const colorClass = css[`color_${color}`];
    const sizeClass = css[`size_${size}`];

    buttonProps.className = `${buttonProps.className} ${css.SquareButton} ${colorClass} ${sizeClass}`;

    return (
        <button { ...buttonProps }>{ text }</button>
    );
};
