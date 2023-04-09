import { FC } from 'react';
import css from './AccountsTable.module.scss';
import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { AccountRow } from './AccountRow';
import { vkAccountThunks } from '~/gstate/thunks/vkAccountThunks';
import { useIsFirstRender } from '~/hooks/render';

type AccountsTableProps = {
}

export const AccountsTable: FC<AccountsTableProps> = (props) => {
    const dispatch = useAppDispatch();
    const isFirst = useIsFirstRender();

    if (isFirst) {
        dispatch(vkAccountThunks.getAll());
    }

    const vkAccounts = useAppSelector((state) => state.vkAccounts);

    return (
        <div className={ css.AccountsTable }>
            <table className={ css.table }>
                <tbody>
                    { vkAccounts.list.map((vkAccount) => {
                        return <AccountRow
                            key={ vkAccount.id }
                            id={ vkAccount.id }
                            vkSlug={ vkAccount.vk.slug }
                            vkName={ vkAccount.vk.fullName }
                        />;
                    }) }
                </tbody>
            </table>
        </div>
    );
};
