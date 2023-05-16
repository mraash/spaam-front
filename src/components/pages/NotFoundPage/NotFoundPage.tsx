import { FC } from 'react';
import css from './NotFoundPage.module.scss';

type NotFoundPageProps = {
};

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    return (
        <div className={ css.NotFoundPage }>
            <span className={ css.text }>404 Not found :(</span>
        </div>
    );
};
