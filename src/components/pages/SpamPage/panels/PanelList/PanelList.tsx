import { FC } from 'react';
import css from './PanelList.module.scss';
import { Panel } from '../Panel';
import { AddPanel } from '../AddPanel';
import { useAppSelector } from '~/hooks/redux';

type PanelListProps = {
}

export const PanelList: FC<PanelListProps> = (props) => {
    const panels = useAppSelector((state) => state.panels.panels);

    return (
        <ul className={ css.PanelList }>
            { panels.map((panelEntity) => {
                return (
                    <li key={ Math.random() } className={ css.panelWr }>
                        <Panel
                            id={ panelEntity.id }
                            isActive={ false }
                            senders={[
                                {
                                    isSelected: false,
                                    name: panelEntity.sender,
                                },
                            ]}
                            recipients={[
                                {
                                    isSelected: false,
                                    name: panelEntity.recipient,
                                },
                            ]}
                            timeoutConfig={ panelEntity.timers }
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
