import { FC, useState } from 'react';
import css from './AuthBlock.module.scss';
import { LoginForm } from './forms/LoginForm';
import { RegisterForm } from './forms/RegisterForm';

type AuthBlockProps = {
};

export const AuthBlock: FC<AuthBlockProps> = (props) => {
    const loginTab = 1;
    const registerTab = 2;

    const [activeTab, setActiveTab] = useState(loginTab);

    return (
        <div className={ css.AuthBlock }>
            <nav className={ css.tabs }>
                <ul className={ css.tabList }>
                    <li className={ css.tabItem }>
                        <span
                            className={ `
                                ${css.tabLink}
                                ${activeTab === loginTab ? css.tabLink_active : ''}
                            ` }
                            onClick={ setActiveTab.bind(null, loginTab) }
                        >Login</span>
                    </li>
                    <li className={ css.tabItem }>
                        <span
                            className={ `
                                ${css.tabLink}
                                ${activeTab === registerTab ? css.tabLink_active : ''}
                            ` }
                            onClick={ setActiveTab.bind(null, registerTab) }
                        >Register</span>
                    </li>
                </ul>
            </nav>
            <div className={ css.tabContainer }>
                <div className={ `
                    ${css.tabContent}
                    ${activeTab === loginTab ? css.tabContent_active : ''}
                ` }>
                    <LoginForm/>
                </div>
                <div className={ `
                    ${css.tabContent}
                    ${activeTab === registerTab ? css.tabContent_active : ''}
                ` }>
                    <RegisterForm/>
                </div>
            </div>
        </div>
    );
};
