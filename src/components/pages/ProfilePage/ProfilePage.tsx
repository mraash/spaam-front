import { FC } from 'react';
import css from './ProfilePage.module.scss';
import { BaseLayout, Content } from '~/components/layouts/BaseLayout';

type ProfilePageProps = {
}

export const ProfilePage: FC<ProfilePageProps> = (props) => {
    return (
        <BaseLayout>
            <Content>
                <div className={ css.ProfilePage }>
                    <div>test@test.com</div>
                </div>
            </Content>
        </BaseLayout>
    );
};
