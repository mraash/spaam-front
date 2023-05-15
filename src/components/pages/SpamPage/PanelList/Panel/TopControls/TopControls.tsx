import { FC } from 'react';
import css from './TopControls.module.scss';
import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { panelActions } from '~/gstate/slices/panelSlice';
import { TextButton } from '~/components/ui-kit/buttons/TextButton';

type TopControlsProps = {
    panelId: number,
};

export const TopControls: FC<TopControlsProps> = (props) => {
    const dispatch = useAppDispatch();
    const panel = useAppSelector((state) => state.panels.list.find((item) => item.id === props.panelId)!);

    const onStartButton = () => {
        panel.spammer.start(panel.timers);
    };

    const onDeleteButton = () => {
        dispatch(panelActions.remove(props.panelId));
    };

    return (
        <div className={ css.TopControls }>
            <ul className={ css.controlList }>
                <li className={ css.controlWr }>
                    <TextButton text='Start' color='success' size={ 300 } onClick={ onStartButton } />
                </li>
                <li className={ css.controlWr }>
                    <TextButton text='Delete' color='danger' size={ 300 } onClick={ onDeleteButton } />
                </li>
            </ul>
        </div>
    );
};
