import { FC, useEffect } from 'react';
import css from './MyAccountsPage.module.scss';
import { useAppDispatch } from '~/hooks/redux';
import { vkAccountsThunk } from '~/gstate/slices/vkAccountsSlice';
import { BaseLayout, Content } from '~/components/layouts/BaseLayout';
import { AccountsTable } from './AccountsTable';
import { Header } from './Header';

type MyAccountsPageProps = {
}

export const MyAccountsPage: FC<MyAccountsPageProps> = (props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(vkAccountsThunk.getCreationLink());
    }, [dispatch]);

    return (
        <BaseLayout>
            <Content>
                <div className={ css.MyAccountsPage }>
                    <div className={ css.headerWr }>
                        <Header/>
                    </div>
                    <div className={ css.tableWr }>
                        <AccountsTable/>
                    </div>
                </div>
            </Content>
        </BaseLayout>
    );
};
