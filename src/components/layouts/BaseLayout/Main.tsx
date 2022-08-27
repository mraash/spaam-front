import { FC } from 'react';
import css from './Main.module.scss';

type MainProps = {
    children?: any;
}

export const Main: FC<MainProps> = (props) => {
    return (
        <div className={ css.Main }>
            { props.children }
        </div>
    );
};
