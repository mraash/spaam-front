import { FC } from 'react';
import css from './Header.module.scss';
import { useAppSelector } from '~/hooks/redux';

type HeaderProps = {
}

export const Header: FC<HeaderProps> = (props) => {
    const link = useAppSelector((state) => state.vkAccounts.creationLink) ?? '#';

    return (
        <div>
            <a
                className={ css.addButton }
                href={ link }
                target='_blank'
            >+ Add</a>
        </div>
    );
};
