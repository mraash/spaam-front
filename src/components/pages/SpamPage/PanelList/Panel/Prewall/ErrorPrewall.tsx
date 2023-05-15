import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import css from './ErrorPrewall.module.scss';
import { useAppDispatch } from '~/hooks/redux';
import { panelActions } from '~/gstate/slices/panelSlice';

type ErrorPrewallProps = {
    panelId: number,
    message: string,
};

export const ErrorPrewall: FC<ErrorPrewallProps> = (props) => {
    const dispatch = useAppDispatch();

    const onDeleteButton = () => {
        dispatch(panelActions.setError({
            id: props.panelId,
            error: null,
        }));
    };

    return (
        <div className={ css.ErrorPrewall }>
            <div className={ css.header }>
                <div className={ css.deleteButtonWr }>
                    <button className={ css.deleteButton } onClick={ onDeleteButton }>
                        <FontAwesomeIcon icon={ faRemove }/>
                    </button>
                </div>
            </div>
            <div className={ css.messageWr }>
                <span className={ css.message }>{ props.message }</span>
            </div>
        </div>
    );
};
