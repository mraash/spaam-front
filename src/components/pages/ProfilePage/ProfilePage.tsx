import { FC } from 'react';
import { useSignOut } from 'react-auth-kit';
import css from './ProfilePage.module.scss';
import { BaseLayout, Content } from '~/components/layouts/BaseLayout';
import { useAppSelector } from '~/hooks/redux';
import { TextButton } from '~/components/ui-kit/buttons/TextButton';
import { defaultPublicRoute } from '~/router/routes';
import { VerticalTable } from '~/components/ui-kit/tables/VerticalTable';

type ProfilePageProps = {
};

export const ProfilePage: FC<ProfilePageProps> = (props) => {
    const user = useAppSelector((state) => state.auth.user);
    const vkAccountCount = useAppSelector((state) => state.vkAccounts.list.length);

    const signOut = useSignOut();

    const onLogout = () => {
        signOut();

        window.location.href = defaultPublicRoute();
    };

    const preloader = <strong>Loading...</strong>;

    return (
        <BaseLayout>
            <Content>
                <div className={ css.ProfilePage }>
                    <div>
                        { !user ? preloader : <VerticalTable table={[
                            { key: 'Email', value: user.email },
                            { key: 'Vk accounts', value: vkAccountCount },
                        ]}/> }
                    </div>
                    <div className={ css.logoutButtonWr }>
                        <TextButton text='Logout' color='danger' onClick={ onLogout }/>
                    </div>
                </div>
            </Content>
        </BaseLayout>
    );
};
