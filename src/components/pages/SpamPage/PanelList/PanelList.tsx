import { FC } from 'react';
import { useAppSelector } from '~/hooks/redux';
import css from './PanelList.module.scss';
import { Panel } from './Panel';
import { AddPanel } from './AddPanel';

type PanelListProps = {
};

export const PanelList: FC<PanelListProps> = (props) => {
    const panels = useAppSelector((state) => state.panels.list);
    const vkAccounts = useAppSelector((state) => state.vkAccounts.list);

    return (
        <ul className={ css.PanelList }>
            { panels.map((panel) => {
                return (
                    <li key={ panel.id } className={ css.panelWr }>
                        <Panel
                            id={ panel.id }
                            isActive={ false }
                            senders={ vkAccounts.map((vkAccount) => ({
                                isSelected: vkAccount.id === panel.senderId,
                                id: vkAccount.id,
                                name: vkAccount.vk.fullName,
                            })) }
                            recipient={ panel.recipient }
                            texts={ panel.texts }
                            timerConfig={ panel.timers }
                        />
                    </li>
                );
            }) }
            <li className={ css.panelWr }>
                <AddPanel/>
            </li>
        </ul>
    );
};
