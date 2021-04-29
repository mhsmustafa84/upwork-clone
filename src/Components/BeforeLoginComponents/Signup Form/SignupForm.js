/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import apple from "../../../assets/svg/apple.svg";
import { signUpAction } from '../../../Store/actions/signUp';

export default function SignupForm() {

  const { push } = useHistory();
  let user = useSelector((state) => state.signUpData);
  const dispatch = useDispatch();


  const getEmail = (e) => {
    user.email = e.target.value;
    dispatch(signUpAction(user));
  }

  const signUpContinue = () => {
    push('/sign-up/details');
  }



  return (
    <div className="col-sm-12 col-md-6 mx-auto">
      <div className="shadow-sm p-3 mb-5 bg-white rounded mx-auto mt-5 w-100 border">
        <h4 data-v-904d5b16 className="text-center m-0">
          <span style={{ fontFamily: "serif", fontWeight: "bold" }}>
            Get your free account
          </span>
        </h4>
        <div className="google-btn  gap-2 mx-auto mt-3 rounded hitbtn-class">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <div className="text-justify ">
            <p
              className="text-center text-white"
              style={{ paddingTop: ".3em" }}
            >
              Continue with Google
            </p>
          </div>
        </div>
        <div className="mb-5 d-grid gap-2 col-8 mx-auto mt-3 border border-dark rounded">
          <button className="btn bg-light " type="button">
            {" "}
            <img src={apple} className="apple-icon" />
            Continue with Apple
          </button>
        </div>
        <div className="separator mt-3 col-8 mx-auto">or</div>
        <form>
          <div className="form-group col-8 mx-auto mt-3">
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Work email address"
              onInput={getEmail}
            />
          </div>
          <div className="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-class loginpcolor mb-4">
            <button
              className="btn bg-upwork "
              type="button"
              onClick={signUpContinue}
            >
              Continue with Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
