import { FC } from 'react';
import { routes } from '~/router/routes';
import css from './NavBar.module.scss';
import { NavList } from './NavList';

type NavBarProps = {
};

export const NavBar: FC<NavBarProps> = (props) => {
    return (
        <div className={ css.NavBar }>
            <NavList items={[
                {
                    link: routes.spamer(),
                    text: 'S',
                },
                {
                    link: routes.myAccounts(),
                    text: 'A',
                },
                {
                    link: routes.profile(),
                    text: 'P',
                },
            ]}/>
        </div>
    );
};
