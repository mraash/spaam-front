import { FC } from 'react';
import { vkAccountThunks } from '~/gstate/thunks/vkAccountThunks';
import { useAppDispatch } from '~/hooks/redux';
import css from './AccountRow.module.scss';

type AccountRowProps = {
    id: number,
    vkName: string,
    vkSlug: string,
};

export const AccountRow: FC<AccountRowProps> = (props) => {
    const dispatch = useAppDispatch();

    const onDeleteAccountButton = () => {
        dispatch(vkAccountThunks.remove(props.id));
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
