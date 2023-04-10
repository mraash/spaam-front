import { FC } from 'react';
import { useAppDispatch } from '~/hooks/redux';
import { panelActions } from '~/gstate/slices/panelSlice';
import css from './AddPanel.module.scss';

type AddPanelProps = {
};

export const AddPanel: FC<AddPanelProps> = (props) => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(panelActions.add({
            id: Date.now(),
            sender: {
                id: Math.random(),
                vk: {
                    id: Math.random(),
                    slug: 'abc',
                },
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
