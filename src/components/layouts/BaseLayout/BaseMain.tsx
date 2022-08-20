import { FC } from 'react';

type BaseMainProps = {
    children?: any;
}

export const BaseMain: FC<BaseMainProps> = (props) => {
    return (
        <div>
            { props.children }
        </div>
    );
};
