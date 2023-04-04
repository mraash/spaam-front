import { FC } from 'react';
import css from './AuthPage.module.scss';
import { AuthBlock } from './AuthBlock';

type AuthPageProps = {
}

export const AuthPage: FC<AuthPageProps> = (props) => {
    return (
        <div className={ css.AuthPage }>
            <div className={ css.authBlockWr }>
                <AuthBlock />
            </div>
        </div>
    );
};
