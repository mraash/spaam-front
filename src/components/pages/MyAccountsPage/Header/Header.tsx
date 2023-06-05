import { FC } from 'react';
import css from './Header.module.scss';
import { useAppSelector } from '~/hooks/redux';
import { TextButton } from '~/components/ui-kit/buttons/TextButton';

type HeaderProps = {
};

export const Header: FC<HeaderProps> = (props) => {
    const link = useAppSelector((state) => state.vkAccounts.creationLink ?? '#');

    const showPopup = () => {
        const message = 'When you are redirected to the page with the token, change the url base ' +
            '"oauth.vk.com/blank.html" to "spaamer.online/create-vk-account" and reload the page. \n\n' +

            'Note: That will give the application full control over your VK account, so it\'s better to add' +
            'only fake accounts.';

        window.prompt(message, 'spaamer.online/create-vk-account');
    };

    return (
        <div className={ css.Header }>
            <a href={ link } target='_blank' onClick={ showPopup }>
                <TextButton text='Add' color='success'/>
            </a>
        </div>
    );
};
