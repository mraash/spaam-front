import { FC } from 'react';
import css from './ProfilePage.module.scss';
import { BaseLayout, Content } from '~/components/layouts/BaseLayout';
import { LogoutButton } from './Logout';
import { useAppSelector } from '~/hooks/redux';

type ProfilePageProps = {
};

export const ProfilePage: FC<ProfilePageProps> = (props) => {
    const user = useAppSelector((state) => state.auth.user);

    return (
        <BaseLayout>
            <Content>
                <div className={ css.ProfilePage }>
                    <div>
                        { !user ? <strong>Loading...</strong> : user.email }
                    </div>
                    <div className={ css.logoutButtonWr }>
                        <LogoutButton/>
                    </div>
                </div>
            </Content>
        </BaseLayout>
    );
};
