import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { fbAuth } from '../../firebase';
import { createDocumentWithId } from '../../Network/Network';
import { Timestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import CountrySelect from 'react-bootstrap-country-select';

const EMAIL_REG =
    /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

export const SignupForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [validate, setValidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        terms: false,
    });
    const terms = useRef(null);
    const [country, setCountry] = useState('');
    let navigate = useNavigate();

    const [user, setuser] = useState({
        authID: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        userType: 'client',
        createdAt: Timestamp.now(),
    });
    console.log(user.userType);

    const getUserData = e => {
        const val = e.target.value;
        const name = e.target.name;
        switch (name) {
            case 'firstName':
                setuser({ ...user, firstName: val });
                setValidate({
                    ...validate,
                    firstName:
                        val === ''
                            ? 'First name is required'
                            : val.length < 3
                            ? 'First name must be more than 2 letters'
                            : null,
                });
                break;
            case 'lastName':
                setuser({ ...user, lastName: val });
                setValidate({
                    ...validate,
                    lastName:
                        val === ''
                            ? 'Last name is required'
                            : val.length < 3
                            ? 'Last name must be more than 2 letters'
                            : null,
                });
                break;
            case 'email':
                setuser({ ...user, email: val });
                setValidate({
                    ...validate,
                    email:
                        val === ''
                            ? 'Email is required'
                            : !val.match(EMAIL_REG)
                            ? 'Please enter a valid Email'
                            : null,
                });
                break;
            case 'password':
                setuser({ ...user, password: val });
                setValidate({
                    ...validate,
                    password:
                        val === ''
                            ? 'Password is required'
                            : val.length < 8
                            ? 'Password length must be more than 8'
                            : null,
                });
                break;
            case 'userType':
                setuser({ ...user, userType: val });
                break;
            case 'terms':
                console.log(terms.current.checked);
                setValidate({
                    ...validate,
                    terms: terms.current.checked,
                });
                break;
            default:
                break;
        }
    };

    const signUpComplete = () => {
        fbAuth
            .createUserWithEmailAndPassword(
                fbAuth.auth,
                user.email,
                user.password
            )
            .then(res => {
                if (res.user) {
                    res.user.updateProfile({ displayName: user.userType });
                    res.user.sendEmailVerification();
                    localStorage.setItem('userType', user.userType);
                    if (user.userType === 'talent') {
                        createDocumentWithId(
                            user.userType,
                            {
                                ...user,
                                authID: fbAuth.auth.currentUser.uid,
                                accepted: false,
                                totalJobs: 0,
                                totalEarnings: 0,
                                totalHours: 0,
                                availability: '',
                                hourlyRate: 0,
                                badge: {
                                    none: '',
                                    risingTalent: 'Rising Talent',
                                    risingTalentAr: 'موهبة صاعدة',
                                    topRated: 'Top Rated',
                                    topRatedAr: 'تقييم عالي',
                                    expert: 'Expert-Vetted',
                                    expertAr: 'خبير',
                                },
                                // jobHistory: [],
                                employmentHistory: [],
                                education: {
                                    school: '',
                                    areaOfStudy: '',
                                    degree: '',
                                    gradYear: '',
                                },
                                portfolio: [],
                                skills: [],
                                // otherExperience: [],
                                connects: 20,
                                connectsHistory: [],
                                profileCompletion: 0,
                                savedJobs: [],
                            },
                            fbAuth.auth.currentUser.uid
                        );
                    } else if (user.userType === 'client') {
                        createDocumentWithId(
                            user.userType,
                            {
                                ...user,
                                authID: fbAuth.auth.currentUser.uid,
                                paymentVerified: false,
                                review: 0,
                                spentMoney: 0,
                                location: country.name,
                                savedTalent: [],
                            },
                            fbAuth.auth.currentUser.uid
                        );
                    }
                    navigate('/sign-up/please-verify');
                    sessionStorage.setItem('searchArray', [' ']);
                }
            })
            .catch(err => {
                setErrorMessage(err.message);
                console.log(err.message);
            });
    };

    return (
        <div className='container py-5 mt-5'>
            <div className='mx-auto col-md-8 shadow py-5 rounded border'>
                <h2 className='text-center fw-bold'>
                    Sign up to find work you love
                </h2>
                <form className='my-5 w-75 mx-auto'>
                    <div className='form-group d-flex gap-3 my-4'>
                        <input
                            type='text'
                            name='firstName'
                            className={`form-control ${
                                validate.firstName &&
                                'border-danger shadow-none text-danger'
                            }`}
                            placeholder='First Name'
                            onInput={getUserData}
                        />
                        <input
                            type='text'
                            name='lastName'
                            className={`form-control ${
                                validate.lastName &&
                                'border-danger shadow-none text-danger'
                            }`}
                            placeholder='Last Name'
                            onInput={getUserData}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            name='email'
                            className={`form-control ${
                                validate.email &&
                                'border-danger shadow-none text-danger'
                            }`}
                            id='exampleInputEmail1'
                            placeholder='Email'
                            onInput={getUserData}
                        />
                    </div>
                    <div className='form-group my-4'>
                        <input
                            type='password'
                            name='password'
                            className={`form-control ${
                                validate.password &&
                                'border-danger shadow-none text-danger'
                            }`}
                            placeholder='Password'
                            onInput={getUserData}
                        />
                    </div>
                    <div className='text-center'>
                        <p className='text-danger'>{validate.firstName}</p>
                        <p className='text-danger'>{validate.lastName}</p>
                        <p className='text-danger'>{validate.email}</p>
                        <p className='text-danger'>{validate.password}</p>
                        <p className='text-danger'>{errorMessage}</p>
                    </div>
                    <h4 className='text-center mt-4 mb-3'>
                        Join as a client or freelancer
                    </h4>
                    <div className='d-flex justify-content-center gap-3'>
                        <div>
                            <input
                                type='radio'
                                name='userType'
                                className='btn-check'
                                id='client'
                                defaultChecked
                                value='client'
                                onInput={getUserData}
                            />
                            <label
                                className='btn upw-btn-outline'
                                htmlFor='client'
                            >
                                I am a client
                            </label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                name='userType'
                                className='btn-check'
                                id='talent'
                                value='talent'
                                onInput={getUserData}
                            />
                            <label
                                className='btn upw-btn-outline'
                                htmlFor='talent'
                            >
                                I am a freelancer
                            </label>
                        </div>
                    </div>
                    <div className='w-75 mx-auto my-4'>
                        <CountrySelect value={country} onChange={setCountry} />
                    </div>
                    <div className='form-check my-4'>
                        <input
                            ref={terms}
                            name='terms'
                            className='form-check-input'
                            type='checkbox'
                            onChange={getUserData}
                        />
                        <p className='text-color fs-7'>
                            Yes I understand and agree to the Upwork Terms of
                            Service, including the User Agreement and Privacy
                            Policy
                        </p>
                    </div>
                    <div className='w-75 mx-auto'>
                        <button
                            className='btn w-100 upw-bg-color rounded-pill text-white'
                            type='button'
                            disabled={
                                validate.password != null ||
                                validate.firstName ||
                                validate.lastName ||
                                (user.userType === 'client' && !country) ||
                                !validate.terms
                            }
                            onClick={signUpComplete}
                        >
                            Create my account
                        </button>
                    </div>
                </form>
                <p className='text-center'>
                    Already have an account?
                    <Link
                        className='upw-link'
                        to={`${process.env.PUBLIC_URL}/login`}
                    >
                        {' '}
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};
