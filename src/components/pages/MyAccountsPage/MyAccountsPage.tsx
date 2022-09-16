import { FC } from 'react';
import { BaseLayout, Main } from '~/components/layouts/BaseLayout';

type MyAccountsPageProps = {
}

export const MyAccountsPage: FC<MyAccountsPageProps> = (props) => {
    return (
        <BaseLayout>
            <Main>
                My accounts
            </Main>
        </BaseLayout>
    );
};
