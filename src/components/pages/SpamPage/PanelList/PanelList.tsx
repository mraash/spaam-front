import { FC } from 'react';
import { useAppSelector } from '~/hooks/redux';
import css from './PanelList.module.scss';
import { Panel } from './Panel';
import { AddPanel } from './AddPanel';

type PanelListProps = {
}

export const PanelList: FC<PanelListProps> = (props) => {
    const panels = useAppSelector((state) => state.panels.list);

    return (
        <ul className={ css.PanelList }>
            { panels.map((panelEntity) => {
                return (
                    <li key={ panelEntity.id } className={ css.panelWr }>
                        <Panel
                            id={ panelEntity.id }
                            isActive={ false }
                            senders={[
                                {
                                    isSelected: true,
                                    name: panelEntity.sender.name,
                                },
                                {
                                    isSelected: false,
                                    name: 'xxx',
                                },
                            ]}
                            recipient={ panelEntity.recipient }
                            texts={ panelEntity.texts }
                            timerConfig={ panelEntity.timers }
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
