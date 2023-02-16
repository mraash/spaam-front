import { FC } from 'react';
import css from './AccountsTable.module.scss';
import { useAppSelector } from '~/hooks/redux';
import { AccountRow } from './AccountRow';

type AccountsTableProps = {
}

export const AccountsTable: FC<AccountsTableProps> = (props) => {
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
                            name={ vkAccount.name }
                        />;
                    }) }
                </tbody>
            </table>
        </div>
    );
};
