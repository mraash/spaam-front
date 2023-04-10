import { FC, ReactElement } from 'react';
import css from './BaseLayout.module.scss';
import { Content } from './Content';
import { NavBar } from './NavBar';

type BaseProps = {
    children?: ReactElement<typeof Content>,
};

export const BaseLayout: FC<BaseProps> = (props) => {
    return (
        <div className={ css.BaseLayout }>
            <div className={ css.navbarWr }>
                <NavBar/>
            </div>
            <div className={ css.contentWr }>
                { props.children }
            </div>
        </div>
    );
};
