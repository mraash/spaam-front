import { FC } from 'react';
import css from './TopControls.module.scss';

type TopControlsProps = {
    isPanelActive: boolean
}

export const TopControls: FC<TopControlsProps> = (props) => {
    return (
        <div className={ css.TopControls }>
            <div className={ css.controlWr }>
                <input
                    className={ `${css.control} ${css.activateCheckbox}` }
                    type="checkbox"
                    checked={ props.isPanelActive }
                />
            </div>
            <div className={ css.controlWr }>
                <button className={ `${css.control} ${css.deleteButton}` }>-</button>
            </div>
        </div>
    );
};
