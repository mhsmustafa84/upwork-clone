import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { fbAuth } from '../../firebase';
import { createDocumentWithId } from '../../Network/Network';
import { Timestamp } from 'firebase/firestore';
import CountrySelect from 'react-bootstrap-country-select';
import { Link } from 'react-router-dom';

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

    const [usr, setuser] = useState({
        authID: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        userType: 'client',
        createdAt: Timestamp.now(),
    });
    console.log(usr.userType);

    const getUserData = e => {
        const val = e.target.value;
        const name = e.target.name;
        switch (name) {
            case 'firstName':
                setuser({ ...usr, firstName: val });
                setValidate({
                    ...validate,
                    firstName:
                        val === ''
                            ? 'First name is required'
                            : val.length < 3
                            ? 'First name must be more than 2'
                            : null,
                });
                break;
            case 'lastName':
                setuser({ ...usr, lastName: val });
                setValidate({
                    ...validate,
                    lastName:
                        val === ''
                            ? 'Last name is required'
                            : val.length < 3
                            ? 'Last name must be more than 2'
                            : null,
                });
                break;
            case 'email':
                setuser({ ...usr, email: val });
                setValidate({
                    ...validate,
                    email:
                        val === ''
                            ? 'Email required'
                            : !val.match(EMAIL_REG)
                            ? 'Please Enter a Valid Email'
                            : null,
                });
                break;
            case 'password':
                setuser({ ...usr, password: val });
                setValidate({
                    ...validate,
                    password:
                        val === ''
                            ? 'This is Required'
                            : val.length < 8
                            ? 'Password Should be More 8 Character'
                            : null,
                });
                break;
            case 'userType':
                setuser({ ...usr, userType: val });
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
                usr.email,
                usr.password
            )
            .then(res => {
                if (res.user) {
                    res.user.updateProfile({ displayName: usr.userType });
                    res.user.sendEmailVerification();
                    localStorage.setItem('userType', usr.userType);
                    if (usr.userType === 'talent') {
                        createDocumentWithId(
                            usr.userType,
                            {
                                ...usr,
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
                    } else if (usr.userType === 'client') {
                        createDocumentWithId(
                            usr.userType,
                            {
                                ...usr,
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
            <div className='mx-auto w-60 shadow px-3 py-5 rounded border'>
                <h2 className='text-center fw-bold'>
                    Sign up to find work you love
                </h2>
                <form className='my-5 w-75 mx-auto'>
                    <div className='form-group d-flex gap-3 my-4'>
                        <input
                            type='text'
                            name='firstName'
                            className='form-control'
                            placeholder='First Name'
                            onInput={getUserData}
                        />
                        <input
                            type='text'
                            name='lastName'
                            className='form-control'
                            placeholder='Last Name'
                            onInput={getUserData}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='email'
                            name='email'
                            className='form-control'
                            id='exampleInputEmail1'
                            placeholder='Email'
                            onInput={getUserData}
                        />
                    </div>
                    <div className='form-group my-4'>
                        <input
                            type='password'
                            name='password'
                            className='form-control'
                            placeholder='Password'
                            onInput={getUserData}
                        />
                    </div>
                    <div>
                        <p className='text-danger'>{validate.firstName}</p>
                        <p className='text-danger'>{validate.lastName}</p>
                        <p className='text-danger'>{validate.email}</p>
                        <p className='text-danger'>{validate.password}</p>
                        <p className='text-danger'>{errorMessage}</p>
                    </div>
                    <h3 className='text-center mt-5 mb-3'>
                        Join as a client or freelancer
                    </h3>
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
                                // className='btn upw-border-color upw-color'
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
                                // className='btn upw-border-color upw-color'
                                className='btn upw-btn-outline'
                                htmlFor='talent'
                            >
                                I am a freelancer
                            </label>
                        </div>
                    </div>
                    <div className={'my-3 text-dark w-75 mx-auto'}>
                        <CountrySelect value={country} onChange={setCountry} />
                    </div>
                    <div className='form-check w-75 mx-auto my-4'>
                        <input
                            ref={terms}
                            name='terms'
                            className='form-check-input'
                            type='checkbox'
                            onChange={getUserData}
                        />
                        <p className='text-main-color fs-7'>
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
                                (usr.userType === 'client' && !country) ||
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
                    <Link to={`${process.env.PUBLIC_URL}/login`}> Log In</Link>
                </p>
            </div>
        </div>
    );
};
