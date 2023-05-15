import { FC } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { faEnvelope, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import { routes } from '~/router/routes';
import css from './NavBar.module.scss';
import { NavList } from './NavList';

type NavBarProps = {
};

export const NavBar: FC<NavBarProps> = (props) => {
    const currentPath = useLocation().pathname;

    return (
        <div className={ css.NavBar }>
            <NavList items={[
                {
                    link: routes.spammer(),
                    icon: faEnvelope,
                    isActive: matchPath(routes.spammer(), currentPath) !== null,
                },
                {
                    link: routes.myAccounts(),
                    icon: faUsers,
                    isActive: matchPath(routes.myAccounts(), currentPath) !== null,
                },
                {
                    link: routes.profile(),
                    icon: faUser,
                    isActive: matchPath(routes.profile(), currentPath) !== null,
                },
            ]}/>
        </div>
    );
};
