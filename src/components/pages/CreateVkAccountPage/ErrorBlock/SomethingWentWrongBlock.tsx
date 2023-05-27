import { FC } from 'react';
import css from './ErrorBlock.module.scss';
import { defaultPrivateRoute } from '~/router/routes';

type SomethingWentWrongProps = {
};

export const SomethingWentWrong: FC<SomethingWentWrongProps> = (props) => {
    return (
        <div className={ css.ErrorBlock }>
            <h2 className={ css.title }>
                Something went wong.
            </h2>
            <div className={ css.text }>
                Please try later
            </div>
            <div className={ css.homeLinkWr }>
                <a className={ css.link } href={ defaultPrivateRoute() }>Home</a>
            </div>
        </div>
    );
};
