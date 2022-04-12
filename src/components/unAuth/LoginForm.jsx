/* eslint-disable */
import { Link, useNavigate } from 'react-router-dom';
import { fbAuth } from '../../firebase';
import { useState } from 'react';

export const LoginForm = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [emailError, setEmailErorr] = useState('');
    const [PasswordError, setPasswordErrorr] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const getUserData = e => {
        const name = e.target.name;
        const val = e.target.value;
        switch (name) {
            case 'email':
                setUser({
                    ...user,
                    email: val,
                });
                setEmailErorr(
                    val === ''
                        ? t('Email required')
                        : !val.match(
                              /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
                          )
                        ? t('Please inter Valid Email')
                        : null
                );
                break;
            case 'password':
                setUser({
                    ...user,
                    password: val,
                });
                setPasswordErrorr(
                    val === ''
                        ? t('This is Required')
                        : val.length < 8
                        ? t('Password Should be More 8 Character')
                        : null
                );
                break;
            default:
                break;
        }
    };

    const login = e => {
        console.log('file: LoginTemp.js => line 58 => login => user', user);
        e.preventDefault();
        fbAuth
            .signInWithEmailAndPassword(fbAuth.auth, user.email, user.password)
            .then(res => {
                if (res.user) {
                    localStorage.setItem('userType', res.user.displayName);
                    res.user.displayName === 'talent'
                        ? navigate(`${process.env.PUBLIC_URL}/find-work`)
                        : navigate(`${process.env.PUBLIC_URL}/home`);
                }
            })
            .catch(error => {
                setErrorMessage(error.code);
            });
    };

    return (
        <div className='container py-5 mt-5'>
            <div className='mx-auto w-50 shadow px-3 py-5 rounded border'>
                <h4 className='text-center fw-bold m-0'>Log in to Upwork</h4>
                <form>
                    <div className='form-group w-75 mx-auto mt-5'>
                        <span className='text-danger'>{emailError}</span>
                        <input
                            type='email'
                            name='email'
                            className={`form-control shadow-none ${
                                emailError && 'border-danger'
                            }`}
                            placeholder='Email'
                            onInput={getUserData}
                        />
                    </div>
                    <div className='form-group w-75 mx-auto my-4'>
                        <span className='text-danger'>{PasswordError}</span>
                        <input
                            type='password'
                            name='password'
                            className={`form-control shadow-none ${
                                PasswordError && 'border-danger'
                            }`}
                            placeholder='Password'
                            onInput={getUserData}
                        />
                    </div>
                    <div className='w-75 mx-auto mb-4'>
                        <button
                            className='btn w-100 upw-bg-color rounded-pill text-white'
                            onClick={login}
                            disabled={
                                PasswordError != null || emailError != null
                            }
                        >
                            Log in
                        </button>
                    </div>
                    <div className='text-danger text-center'>
                        {errorMessage}
                    </div>
                    <p className='mt-5 text-center text-color'>
                        Don't have an Upwork account?
                    </p>
                    <div className='mt-4 text-center'>
                        <Link
                            className='btn w-50 rounded-pill upw-btn-outline'
                            to={`${process.env.PUBLIC_URL}/sign-up`}
                        >
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
