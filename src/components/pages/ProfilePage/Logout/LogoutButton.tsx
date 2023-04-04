import { FC } from 'react';
import css from './LogoutButton.module.scss';
import { useAppSignOut } from '~/hooks/auth';

type LogoutButtonProps = {
}

export const LogoutButton: FC<LogoutButtonProps> = (props) => {
    const signOut = useAppSignOut();

    const onClick = () => {
        signOut();
    };

    return (
        <button className={ css.LogoutButton } onClick={ onClick }>Logout</button>
    );
};
