import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import css from './NavItem.module.scss';
import { cn } from '~/libraries/class-name';

export type NavItemProps = {
    link: string,
    icon: IconDefinition,
    isActive: boolean,
};

export const NavItem: FC<NavItemProps> = (props) => {
    return (
        <div className={ cn(css.NavItem, [props.isActive, css.NavItem_active]) }>
            <Link className={ css.link } to={ props.link }>
                <FontAwesomeIcon icon={ props.icon } />
            </Link>
        </div>
    );
};
