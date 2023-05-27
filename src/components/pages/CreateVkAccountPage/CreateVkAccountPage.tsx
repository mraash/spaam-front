import { FC, useState } from 'react';
import css from './CreateVkAccountPage.module.scss';
import { VkAccountsAPI } from '~/api';
import { useIsFirstRender } from '~/hooks/render';
import { routes } from '~/router/routes';
import { VkAccountAlreadyExists } from '~/api/errors';
import { AlreadyExistsBlock, SomethingWentWrong } from './ErrorBlock';

type CreateVkAccountPageProps = {
};

export const CreateVkAccountPage: FC<CreateVkAccountPageProps> = (props) => {
    const isFirstRender = useIsFirstRender();
    const [block, setBlock] = useState(<b>Loading...</b>);

    if (isFirstRender) {
        VkAccountsAPI.create()
            .then(() => {
                setBlock(<div>Ok</div>);
                window.location.href = routes.myAccounts();
            })
            .catch((err) => {
                console.error(err);
                if (err instanceof VkAccountAlreadyExists) {
                    setBlock(<AlreadyExistsBlock/>);
                }
                else {
                    setBlock(<SomethingWentWrong/>);
                }
            });
    }

    return (
        <div className={ css.CreateVkAccountPage }>
            { block }
        </div>
    );
};
