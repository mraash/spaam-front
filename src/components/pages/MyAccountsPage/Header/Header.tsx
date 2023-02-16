import { FC } from 'react';
import css from './Header.module.scss';

type HeaderProps = {
}

export const Header: FC<HeaderProps> = (props) => {
    return (
        <div>
            <button className={ css.addButton }>+ Add</button>
        </div>
    );
};
