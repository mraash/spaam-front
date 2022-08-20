import { FC } from 'react';
import { BaseLayout, BaseMain } from '../../layouts/BaseLayout';

type SpamPageProps = {
}

export const SpamPage: FC<SpamPageProps> = (props) => {
    return (
        <BaseLayout>
            <BaseMain>
                Spam page
            </BaseMain>
        </BaseLayout>
    );
};
