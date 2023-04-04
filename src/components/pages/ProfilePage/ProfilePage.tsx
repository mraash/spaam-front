import { FC } from 'react';
import { useAuthUser } from 'react-auth-kit';
import css from './ProfilePage.module.scss';
import { BaseLayout, Content } from '~/components/layouts/BaseLayout';
import { LogoutButton } from './Logout';

type ProfilePageProps = {
}

export const ProfilePage: FC<ProfilePageProps> = (props) => {
    const auth = useAuthUser();

    return (
        <BaseLayout>
            <Content>
                <div className={ css.ProfilePage }>
                    <div>
                        { auth()?.email }
                    </div>
                    <div className={ css.logoutButtonWr }>
                        <LogoutButton/>
                    </div>
                </div>
            </Content>
        </BaseLayout>
    );
};
