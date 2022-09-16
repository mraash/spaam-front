import { FC } from 'react';
import css from './Content.module.scss';

type ContentProps = {
    children?: any;
}

export const Content: FC<ContentProps> = (props) => {
    return (
        <div className={ css.Content }>
            { props.children }
        </div>
    );
};
