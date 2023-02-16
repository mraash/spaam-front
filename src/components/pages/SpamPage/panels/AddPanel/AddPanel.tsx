import { FC } from 'react';
import { useAppDispatch } from '~/hooks/redux';
import { panelsActions } from '~/gstate/slices/panels-slice';
import css from './AddPanel.module.scss';

type AddPanelProps = {
}

export const AddPanel: FC<AddPanelProps> = (props) => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(panelsActions.add({
            id: Date.now(),
            sender: {
                id: Math.random(),
                vid: Math.random(),
                slug: 'abc',
                name: '',
            },
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
