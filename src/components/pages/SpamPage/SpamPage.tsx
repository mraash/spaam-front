import { FC } from 'react';
import css from './SpamPage.module.scss';
import { BaseLayout, Content } from '../../layouts/BaseLayout';
import { PanelList } from './PanelList';

type SpamPageProps = {
};

export const SpamPage: FC<SpamPageProps> = (props) => {
    return (
        <BaseLayout>
            <Content>
                <div className={ css.SpamPage }>
                    <PanelList/>
                </div>
            </Content>
        </BaseLayout>
    );
};
