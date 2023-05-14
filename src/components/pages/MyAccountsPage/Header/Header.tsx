import { FC } from 'react';
import css from './Header.module.scss';
import { useAppSelector } from '~/hooks/redux';
import { TextButton } from '~/components/ui-kit/buttons/TextButton';

type HeaderProps = {
};

export const Header: FC<HeaderProps> = (props) => {
    const link = useAppSelector((state) => state.vkAccounts.creationLink ?? '#');

    return (
        <div className={ css.Header }>
            <TextButton text='Add' color='success' onClick={ () => window.open(link, '_blank') } />
        </div>
    );
};
