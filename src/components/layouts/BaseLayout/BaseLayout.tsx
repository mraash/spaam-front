import { FC, ReactElement } from 'react';
import { BaseMain } from './BaseMain';

type BaseProps = {
    children?: ReactElement<typeof BaseMain>,
}

export const BaseLayout: FC<BaseProps> = (props) => {
    return (
        <div>
            { props.children }
        </div>
    );
};
