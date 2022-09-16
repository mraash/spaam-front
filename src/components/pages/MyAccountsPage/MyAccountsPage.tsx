import { FC } from 'react';
import { BaseLayout, Content } from '~/components/layouts/BaseLayout';

type MyAccountsPageProps = {
}

export const MyAccountsPage: FC<MyAccountsPageProps> = (props) => {
    return (
        <BaseLayout>
            <Content>
                My accounts
            </Content>
        </BaseLayout>
    );
};
