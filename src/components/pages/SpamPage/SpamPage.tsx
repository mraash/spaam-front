import { FC } from 'react';
import css from './SpamPage.module.scss';
import { BaseLayout, Content } from '../../layouts/BaseLayout';
import { PanelList } from './panels/PanelList';

type SpamPageProps = {
}

export const SpamPage: FC<SpamPageProps> = (props) => {
    return (
        <BaseLayout>
            <Content>
                <div className={ css.SpamPage }>
                    <PanelList panels={ [
                        {
                            isActive: false,
                            senders: [
                                {
                                    name: 'Sender A',
                                    isSelected: false,
                                },
                                {
                                    name: 'Sender B',
                                    isSelected: false,
                                },
                            ],
                            recipients: [
                                {
                                    name: 'Recipient A',
                                    isSelected: false,
                                },
                                {
                                    name: 'Recipient B',
                                    isSelected: true,
                                },
                            ],
                            timeoutConfig: [
                                {
                                    seconds: 72,
                                    repeat: 4,
                                    cycle: 1,
                                },
                                {
                                    seconds: 45,
                                    repeat: 2,
                                    cycle: 3,
                                },
                            ],
                        },
                    ] }/>
                </div>
            </Content>
        </BaseLayout>
    );
};
