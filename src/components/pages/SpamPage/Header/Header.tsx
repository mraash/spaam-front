import { FC } from 'react';
import { panelThunks } from '~/gstate/thunks/panelThunks';
import { useAppDispatch } from '~/hooks/redux';
import css from './Header.module.scss';
import { TextButton } from '~/components/ui-kit/buttons/TextButton';

type HeaderProps = {
};

export const Header: FC<HeaderProps> = (props) => {
    const dispatch = useAppDispatch();

    const onSave = () => {
        dispatch(panelThunks.synchronize());
    };

    return (
        <div className={ css.Header }>
            <TextButton
                color='success'
                onClick={ onSave }
            >
                Save
            </TextButton>
        </div>
    );
};
