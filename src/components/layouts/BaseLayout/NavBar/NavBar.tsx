import { FC } from 'react';
import css from './NavBar.module.scss';

type NavBarProps = {
}

export const NavBar: FC<NavBarProps> = (props) => {
    return (
        <div className={ css.NavBar }>
            NavBar
        </div>
    );
};
