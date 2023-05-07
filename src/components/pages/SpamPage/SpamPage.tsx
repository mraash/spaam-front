import { FC } from 'react';
import css from './SpamPage.module.scss';
import { BaseLayout, Content } from '../../layouts/BaseLayout';
import { PanelList } from './PanelList';
import { Header } from './Header';

type SpamPageProps = {
};

export const SpamPage: FC<SpamPageProps> = (props) => {
    return (
        <BaseLayout>
            <Content>
                <div className={ css.SpamPage }>
                    <div className={ css.header }>
                        <Header/>
                    </div>
                    <div className={ css.panelList }>
                        <PanelList/>
                    </div>
                </div>
            </Content>
        </BaseLayout>
    );
};
