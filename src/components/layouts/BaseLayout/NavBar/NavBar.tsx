import { FC } from 'react';
import css from './NavBar.module.scss';
import { NavList } from './NavList';

type NavBarProps = {
}

export const NavBar: FC<NavBarProps> = (props) => {
    return (
        <div className={ css.NavBar }>
            <NavList items={[
                {
                    link: '/spamer',
                    text: 'S',
                },
                {
                    link: '/my-accounts',
                    text: 'A',
                },
                {
                    link: '/profile',
                    text: 'P',
                },
            ]}/>
        </div>
    );
};
