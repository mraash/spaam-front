import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { panelActions } from '~/gstate/slices/panelSlice';
import css from './AddPanel.module.scss';
import { SingleSpammer } from '~/packages/spam';

type AddPanelProps = {
};

export const AddPanel: FC<AddPanelProps> = (props) => {
    const dispatch = useAppDispatch();
    const firstSender = useAppSelector((state) => state.vkAccounts.list.find(() => true));

    const id = Date.now() * -1;

    const onClick = () => {
        dispatch(panelActions.add({
            id,
            spammer: new SingleSpammer(id),
            isActive: false,
            error: null,
            senderId: firstSender?.id,
            recipient: '',
            texts: [
                '',
            ],
            timers: [
                {
                    seconds: null,
                    repeat: null,
                },
            ],
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
