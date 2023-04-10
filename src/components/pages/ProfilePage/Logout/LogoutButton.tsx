import { FC } from 'react';
import { useSignOut } from 'react-auth-kit';
import { defaultPublicRoute } from '~/router/routes';
import css from './LogoutButton.module.scss';

type LogoutButtonProps = {
};

export const LogoutButton: FC<LogoutButtonProps> = (props) => {
    const signOut = useSignOut();

    const onClick = () => {
        signOut();

        window.location.href = defaultPublicRoute();
    };

    return (
        <button className={ css.LogoutButton } onClick={ onClick }>Logout</button>
    );
};
