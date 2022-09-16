import { FC } from 'react';
import { BaseLayout, Content } from '~/components/layouts/BaseLayout';

type ProfilePageProps = {
}

export const ProfilePage: FC<ProfilePageProps> = (props) => {
    return (
        <BaseLayout>
            <Content>
                Profile
            </Content>
        </BaseLayout>
    );
};
