import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios, { AxiosError } from 'axios';
import * as yup from 'yup';
import { useAppSignIn } from '~/hooks/auth';
import css from './Form.module.scss';
import { AuthInput } from './inputs/AuthInput';
import { apiConsts } from '~/api/app';

type RegisterFormProps = {
}

export const RegisterForm: FC<RegisterFormProps> = (props) => {
    const signIn = useAppSignIn();
    const navigate = useNavigate();

    const formik = useFormik({
        validateOnMount: true,
        validateOnBlur: true,
        validateOnChange: true,
        initialValues: {
            email: '',
            password: '',
            passwordRepeat: '',
        },
        validationSchema: yup.object({
            email: yup.string()
                .required('Required.')
                .email('Invalid email.'),
            password: yup.string()
                .required('Required.')
                .min(3, 'Should be at least 3 characters long.'),
            passwordRepeat: yup.string()
                .required('Required.')
                .equals([yup.ref('password')], 'Passwords must match.'),
        }),
        onSubmit: async (values) => {
            try {
                const { email, password, passwordRepeat } = values;

                const payload = (await axios.post('http://api.spamer.my/v1/auth/register', {
                    email,
                    password,
                    passwordRepeat,
                })).data?.payload;

                signIn(payload.token, payload.refreshToken, email);

                navigate('/spamer');
            }
            catch (err: any) {
                const message = err.response?.data.err.message;

                if (err instanceof AxiosError && message === 'User already exists.') {
                    formik.setErrors({
                        email: 'Email is taken.',
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
                <li className={ css.inputItem }>
                    <AuthInput
                        title='Password repeat'
                        error={ formik.submitCount > 0 ? formik.errors.passwordRepeat : undefined }
                        type='password'
                        name='passwordRepeat'
                        value={ formik.values.passwordRepeat }
                        onChange={ formik.handleChange }
                    />
                </li>
            </ul>
            <div className={ css.submitWr }>
                <button className={ css.submit } type='submit'>
                    Register
                </button>
            </div>
        </form>
    );
};
