import { FC } from 'react';
import css from './MyAccountsPage.module.scss';
import { BaseLayout, Content } from '~/components/layouts/BaseLayout';
import { AccountList } from './AccountList';
import { Header } from './Header';

type MyAccountsPageProps = {
};

export const MyAccountsPage: FC<MyAccountsPageProps> = (props) => {
    return (
        <BaseLayout>
            <Content>
                <div className={ css.MyAccountsPage }>
                    <div className={ css.headerWr }>
                        <Header/>
                    </div>
                    <div className={ css.tableWr }>
                        <AccountList/>
                    </div>
                </div>
            </Content>
        </BaseLayout>
    );
};
