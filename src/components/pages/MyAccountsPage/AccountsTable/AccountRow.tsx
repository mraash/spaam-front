import { FC } from 'react';
import { vkAccountsThunk, vkAccountsActions } from '~/gstate/slices/vkAccountsSlice';
import { useAppDispatch } from '~/hooks/redux';
import css from './AccountRow.module.scss';
import { api } from '~/api';

type AccountRowProps = {
    id: number,
    vkName: string,
    vkSlug: string,
}

export const AccountRow: FC<AccountRowProps> = (props) => {
    const dispatch = useAppDispatch();

    const onDeleteAccountButton = () => {
        dispatch(vkAccountsThunk.remove(props.id));
    };

    return (
        <tr className={ css.AccountRow }>
            <td className={ css.cell }>
                { props.vkName }
            </td>
            <td className={ css.cell }>
                <a
                    className={ css.link }
                    href={ `https://vk.com/${props.vkSlug}` }
                    target="_blank"
                >
                    /{ props.vkSlug }
                </a>
            </td>
            <td className={ css.cell }>
                <button
                    className={ css.deleteButton }
                    onClick={ onDeleteAccountButton }
                >-</button>
            </td>
        </tr>
    );
};
