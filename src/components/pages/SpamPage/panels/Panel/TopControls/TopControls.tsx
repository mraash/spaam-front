import { FC } from 'react';
import { useAppDispatch } from '~/hooks/redux';
import { panelsActions } from '~/gstate/slices/panels-slice';
import css from './TopControls.module.scss';

type TopControlsProps = {
    id: number,
    isPanelActive: boolean
}

export const TopControls: FC<TopControlsProps> = (props) => {
    const dispatch = useAppDispatch();

    const onActivateButton = () => {
        console.log('activate/deactivate');
    };

    const onDeleteButton = () => {
        dispatch(panelsActions.remove(props.id));
    };

    return (
        <div className={ css.TopControls }>
            <div className={ css.controlWr }>
                <input
                    className={ `${css.control} ${css.activateCheckbox}` }
                    type="checkbox"
                    checked={ props.isPanelActive }
                    onChange={ onActivateButton }
                />
            </div>
            <div className={ css.controlWr }>
                <button
                    className={ `${css.control} ${css.deleteButton}` }
                    onClick={ onDeleteButton }
                >
                    -
                </button>
            </div>
        </div>
    );
};
