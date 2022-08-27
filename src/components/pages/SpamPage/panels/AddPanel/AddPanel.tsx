import { FC } from 'react';
import css from './AddPanel.module.scss';

type AddPanelProps = {
}

export const AddPanel: FC<AddPanelProps> = (props) => {
    return (
        <div className={ css.AddPanel }>
            <button className={ css.button }>
                +
            </button>
        </div>
    );
};
