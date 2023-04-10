import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ApiErrors, AuthAPI } from '~/api';
import { defaultPrivateRoute } from '~/router/routes';
import { useAppSignIn } from '~/hooks/auth';
import css from './Form.module.scss';
import { AuthInput } from './inputs/AuthInput';

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

                const auth = await AuthAPI.register(email, password, passwordRepeat);

                signIn(auth.token, auth.refreshToken, email);

                navigate(defaultPrivateRoute());
            }
            catch (err: any) {
                if (err instanceof ApiErrors.EmailIsTaken) {
                    formik.setErrors({
                        email: 'Email is taken.',
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
