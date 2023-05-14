import { FC } from 'react';
import css from './AccountList.module.scss';
import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { Table } from '~/components/ui-kit/tables/Table';
import { vkAccountThunks } from '~/gstate/thunks/vkAccountThunks';
import { TextButton } from '~/components/ui-kit/buttons/TextButton';
import { Link } from '~/components/ui-kit/links/Link';

type AccountListProps = {
};

export const AccountList: FC<AccountListProps> = (props) => {
    const dispatch = useAppDispatch();
    const vkAccounts = useAppSelector((state) => state.vkAccounts.list);

    return (
        <div className={ css.AccountList }>
            <Table
                header={ ['Name', 'Link', 'Actions'] }
                body={ vkAccounts.map((vkAccount) => ([
                    (
                        vkAccount.vk.fullName
                    ),
                    (
                        <Link
                            text={ vkAccount.vk.slug }
                            href={ `https://vk.com/${vkAccount.vk.slug}` }
                            target="_blank"
                        />
                    ),
                    (
                        <TextButton
                            text='Delete'
                            color='danger'
                            size={ 300 }
                            onClick={ () => {
                                dispatch(vkAccountThunks.remove(vkAccount.id));
                            } }
                        />
                    ),
                ])) }
            />
        </div>
    );
};
