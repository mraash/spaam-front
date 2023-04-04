import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from 'react-auth-kit';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import css from './Form.module.scss';
import { apiConsts } from '~/api/app';
import { AuthInput } from './inputs/AuthInput';

type LoginFormProps = {
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string()
                .required('Required.')
                .email('Invalid.'),
            password: yup.string()
                .required('Required.')
                .min(3, 'Should be at least 3 characters long.'),
        }),
        onSubmit: async (values) => {
            try {
                const { email, password } = values;

                const payload = (await axios.post('http://api.spamer.my/v1/auth/login', {
                    email,
                    password,
                })).data?.payload;

                signIn({
                    token: payload.token,
                    expiresIn: apiConsts.tokenTime / 60,
                    tokenType: 'Bearer',
                    authState: { email },
                    refreshToken: payload.refreshToken,
                    refreshTokenExpireIn: apiConsts.refreshTokenTime / 60,
                });

                navigate('/spamer');
            }
            catch (err: any) {
                if (err instanceof AxiosError) {
                    if (err.response?.data.err.message === 'Invalid credentials.') {
                        formik.setErrors({
                            email: 'Invalid credentials.',
                            password: 'Invalid credentials.',
                        });
                    }
                }
                else {
                    console.log(err.response?.status, err.response?.data);
                    throw err;
                }
            }
        },
    });

    return (
        <form className={ css.LoginForm } onSubmit={ formik.handleSubmit } noValidate>
            <ul className={ css.inputList }>
                <li className={ css.inputItem }>
                    <AuthInput
                        title='Email'
                        error={ formik.submitCount > 0 ? formik.errors.email : undefined }
                        type='email'
                        name='email'
                        value={ formik.values.email }
                        onChange={ formik.handleChange }
                    />
                </li>
                <li className={ css.inputItem }>
                    <AuthInput
                        title='Password'
                        error={ formik.submitCount > 0 ? formik.errors.password : undefined }
                        type='password'
                        name='password'
                        value={ formik.values.password }
                        onChange={ formik.handleChange }
                    />
                </li>
            </ul>
            <div className={ css.submitWr }>
                <button className={ css.submit } type='submit'>
                    Login
                </button>
            </div>
        </form>
    );
};
