import { FC } from 'react';
import css from './Header.module.scss';
import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { vkAccountThunks } from '~/gstate/thunks/vkAccountThunks';
import { useIsFirstRender } from '~/hooks/render';

type HeaderProps = {
}

export const Header: FC<HeaderProps> = (props) => {
    const dispatch = useAppDispatch();
    const isFirst = useIsFirstRender();

    if (isFirst) {
        dispatch(vkAccountThunks.getCreationLink());
    }

    const link = useAppSelector((state) => state.vkAccounts.creationLink ?? '#');

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
