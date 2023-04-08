import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ApiErrors, api } from '~/api';
import { useAppSignIn } from '~/hooks/auth';
import css from './Form.module.scss';
import { AuthInput } from './inputs/AuthInput';

type LoginFormProps = {
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const signIn = useAppSignIn();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string()
                .required('Required.')
                .email('Invalid email.'),
            password: yup.string()
                .required('Required.'),
        }),
        onSubmit: async (values) => {
            try {
                const { email, password } = values;

                const auth = await api.auth.login(email, password);

                signIn(auth.token, auth.refreshToken, email);

                navigate('/spamer');
            }
            catch (err: any) {
                if (err instanceof ApiErrors.InvalidCredentialsError) {
                    formik.setErrors({
                        email: 'Invalid credentials.',
                        password: 'Invalid credentials.',
                    });
                }
                else {
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
