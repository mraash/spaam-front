import { FC } from 'react';
import { NavItem, NavItemProps } from '../NavItem';
import css from './NavList.module.scss';

type NavListProps = {
    items: Array<NavItemProps>
};

export const NavList: FC<NavListProps> = (props) => {
    return (
        <nav className={ css.NavList }>
            { props.items.map((item) => {
                return (
                    <li key={ item.link } className={ css.item }>
                        <NavItem { ...item }/>
                    </li>
                );
            }) }
        </nav>
    );
};
