import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
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

                const payload = (await axios.post('http://api.spamer.my/v1/auth/login', {
                    email,
                    password,
                })).data?.payload;

                signIn(payload.token, payload.refreshToken, email);

                navigate('/spamer');
            }
            catch (err: any) {
                const message = err.response?.data.err.message;

                if (err instanceof AxiosError && 'Invalid credentials.') {
                    formik.setErrors({
                        email: 'Invalid credentials.',
                        password: 'Invalid credentials.',
                    });
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
