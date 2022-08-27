import { FC, ReactElement } from 'react';
import { Main } from './Main';

type BaseProps = {
    children?: ReactElement<typeof Main>,
}

export const BaseLayout: FC<BaseProps> = (props) => {
    return (
        <div>
            { props.children }
        </div>
    );
};
