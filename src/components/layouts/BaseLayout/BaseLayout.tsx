import { FC, ReactElement } from 'react';
import css from './BaseLayout.module.scss';
import { Main } from './Main';
import { NavBar } from './NavBar';

type BaseProps = {
    children?: ReactElement<typeof Main>,
}

export const BaseLayout: FC<BaseProps> = (props) => {
    return (
        <div className={ css.BaseLayout }>
            <div className={ css.navbarWr }>
                <NavBar/>
            </div>
            <div className={ css.mainWr }>
                { props.children }
            </div>
        </div>
    );
};
