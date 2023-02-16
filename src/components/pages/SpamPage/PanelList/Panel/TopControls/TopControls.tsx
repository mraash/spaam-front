import { FC } from 'react';
import css from './TopControls.module.scss';
import { useAppDispatch } from '~/hooks/redux';
import { panelsActions } from '~/gstate/slices/panels-slice';

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
            <ul className={ css.controlList }>
                <li className={ css.controlWr }>
                    <input
                        className={ `${css.control} ${css.activateCheckbox}` }
                        type="checkbox"
                        checked={ props.isPanelActive }
                        onChange={ onActivateButton }
                    />
                </li>
                <li className={ css.controlWr }>
                    <button
                        className={ `${css.control} ${css.deleteButton}` }
                        onClick={ onDeleteButton }
                    >
                        -
                    </button>
                </li>
            </ul>
        </div>
    );
};
