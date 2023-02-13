import { FC } from 'react';
import { panelsActions } from '~/gstate/slices/panelsSlice';
import { useAppDispatch } from '~/hooks/redux';
import css from './AddPanel.module.scss';

type AddPanelProps = {
}

export const AddPanel: FC<AddPanelProps> = (props) => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(panelsActions.add({
            id: Date.now(),
            sender: '',
            recipient: '',
            texts: [],
            timers: [],
        }));
    };

    return (
        <div className={ css.AddPanel } onClick={ onClick }>
            <button className={ css.button }>
                +
            </button>
        </div>
    );
};
