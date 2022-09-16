import { FC } from 'react';
import { BaseLayout, Main } from '~/components/layouts/BaseLayout';

type ProfilePageProps = {
}

export const ProfilePage: FC<ProfilePageProps> = (props) => {
    return (
        <BaseLayout>
            <Main>
                Profile
            </Main>
        </BaseLayout>
    );
};
