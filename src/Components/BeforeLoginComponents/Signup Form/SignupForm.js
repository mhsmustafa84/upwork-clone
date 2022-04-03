/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpAction } from '../../../Store/actions/signUp';
import { useTranslation } from "react-i18next";

const EMAIL_REG = /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

export default function SignupForm() {
    const { t } = useTranslation();

    const [emailError, setEmailErorr] = useState("");
    let navigate = useNavigate();
    let user = useSelector(state => state.signUpData);
    const dispatch = useDispatch();

    const getEmail = ({ target }) => {
        user.email = target.value;
        setEmailErorr(
            target.value === ""
                ? t("Email required")
                : !target.value.match(EMAIL_REG)
                    ? t("Please Enter a Valid Email") : null
        );
        dispatch(signUpAction(user));
    }

    const signUpContinue = () => {
        navigate('/sign-up/details');
    }



    return (
        <div className="col-sm-12 col-md-6 mx-auto">
            <div className="shadow-sm p-3 mb-5 bg-white rounded mx-auto mt-5 w-100 border">
                <h4 data-v-904d5b16 className="text-center m-0">
                    <span style={{ fontFamily: "serif", fontWeight: "bold" }}>
                        {t("Get your free account")}
                    </span>
                </h4>
                <form>
                    <div className="form-group col-8 mx-auto mt-3">
                        <span className='text-danger'>{emailError}</span>
                        <input
                            type="email"
                            name="email"
                            className="form-control mt-1"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder={t("Work email address")}
                            onInput={getEmail}
                        />
                    </div>
                    <div className="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-class loginpcolor mb-4">
                        <button
                            disabled={emailError != null}
                            className="btn bg-upwork "
                            type="button"
                            onClick={signUpContinue}
                        >
                            {t("Continue with Email")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
