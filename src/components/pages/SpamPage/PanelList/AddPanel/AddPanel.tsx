import { FC } from 'react';
import { useAppDispatch } from '~/hooks/redux';
import { panelActions } from '~/gstate/slices/panelSlice';
import css from './AddPanel.module.scss';
import { SingleSpammer } from '~/packages/spam';

type AddPanelProps = {
};

export const AddPanel: FC<AddPanelProps> = (props) => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(panelActions.addEmpty(null));
    };

    return (
        <div className={ css.AddPanel } onClick={ onClick }>
            <button className={ css.button }>
                +
            </button>
        </div>
    );
};
