import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import css from './ErrorPrewall.module.scss';

type ErrorPrewallProps = {
    message: string,
};

export const ErrorPrewall: FC<ErrorPrewallProps> = (props) => {
    return (
        <div className={ css.ErrorPrewall }>
            <div className={ css.header }>
                <div className={ css.deleteButtonWr }>
                    <button className={ css.deleteButton }>
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
