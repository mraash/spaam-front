import { FC } from 'react';
import css from './PanelList.module.scss';
import { Panel, PanelProps } from '../Panel';
import { AddPanel } from '../AddPanel';

type PanelListProps = {
    panels: Array<PanelProps>
}

export const PanelList: FC<PanelListProps> = (props) => {
    return (
        <ul className={ css.PanelList }>
            { props.panels.map((panel: PanelProps) => {
                return (
                    <li key={ Math.random() } className={ css.panelWr }>
                        <Panel { ...panel }/>
                    </li>
                );
            }) }
            <li className={ css.panelWr }>
                <AddPanel/>
            </li>
        </ul>
    );
};
