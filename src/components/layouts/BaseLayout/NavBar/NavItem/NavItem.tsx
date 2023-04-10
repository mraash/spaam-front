import { FC } from 'react';
import { Link } from 'react-router-dom';

import css from './NavItem.module.scss';

export type NavItemProps = {
    link: string,
    text: string,
};

export const NavItem: FC<NavItemProps> = (props) => {
    return (
        <div className={ css.NavItem }>
            <Link className={ css.link } to={ props.link }>
                { props.text }
            </Link>
        </div>
    );
};
