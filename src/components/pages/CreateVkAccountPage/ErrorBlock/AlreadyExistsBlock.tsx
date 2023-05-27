import { FC } from 'react';
import css from './ErrorBlock.module.scss';
import { defaultPrivateRoute } from '~/router/routes';

type AlreadyExistsBlockProps = {
};

export const AlreadyExistsBlock: FC<AlreadyExistsBlockProps> = (props) => {
    return (
        <div className={ css.ErrorBlock }>
            <h2 className={ css.title }>
                This account is already added.
            </h2>
            <div className={ css.text }>
                Please loggout in <a className={ css.link } href="http://vk.com" target="_blank">vk.com</a> and
                try again.
            </div>
            <div className={ css.homeLinkWr }>
                <a className={ css.link } href={ defaultPrivateRoute() }>Home</a>
            </div>
        </div>
    );
};
