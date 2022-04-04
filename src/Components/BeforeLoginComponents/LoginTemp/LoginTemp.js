/* eslint-disable */
import { Link } from "react-router-dom";
import { fbAuth, googleProvider } from "../../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginTemp() {
    const [user, setUser] = useState({ email: "", password: "" });
    const [emailError, setEmailErorr] = useState("");
    const [PasswordError, setPasswordErrorr] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    let navigate = useNavigate();

    const getUserData = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        switch (name) {
            case "email":
                setUser({
                    ...user,
                    email: val,
                });
                setEmailErorr(
                    val === ""
                        ? t("Email required")
                        : !val.match(
                            /^([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
                        )
                            ? t("Please inter Valid Email")
                            : null
                );
                break;
            case "password":
                setUser({
                    ...user,
                    password: val,
                });
                setPasswordErrorr(
                    val === ""
                        ? t("This is Required")
                        : val.length < 8
                            ? t("Password Should be More 8 Character")
                            : null
                );
                break;
            default:
                break;
        }
    };

    const login = (e) => {
        console.log("file: LoginTemp.js => line 58 => login => user", user);
        e.preventDefault();
        fbAuth.signInWithEmailAndPassword(fbAuth.auth, user.email, user.password)
            .then(res => {
                if (res.user) {
                    localStorage.setItem("userType", res.user.displayName);
                    res.user.displayName === "talent"
                        ? navigate("/find-work")
                        : navigate("/home")
                }
            }).catch(error => {
                setErrorMessage(error.code);
            });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-5  mx-auto">
                    <div className="shadow-sm p-5 mb-5 bg-white rounded mx-auto mt-5 w-100  border ">
                        <h5 className="text-center m-0">
                            Login and get to work
                        </h5>
                        <form>
                            <span className="text-danger text-center">{errorMessage}</span>
                            <div className="form-group col-8 mx-auto mt-3">
                                <span className="text-danger">{emailError}</span>
                                <input
                                    type="email"
                                    name="email"
                                    className={`form-control shadow-none ${emailError && "border-danger"}`}
                                    aria-describedby="emailHelp"
                                    placeholder="User name or Email"
                                    onInput={getUserData}
                                />
                            </div>
                            <div className="form-group col-8 mx-auto mt-3">
                                <span className="text-danger">{PasswordError}</span>
                                <input
                                    type="password"
                                    name="password"
                                    className={`form-control shadow-none ${PasswordError && "border-danger"}`}
                                    aria-describedby="emailHelp"
                                    placeholder="Password"
                                    onInput={getUserData}
                                />
                            </div>
                            <div className="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-className loginpcolor">
                                <button
                                    className="btn bg-upwork "
                                    onClick={login}
                                    disabled={PasswordError != null || emailError != null}
                                >
                                    Log in
                                </button>
                            </div>
                            <div className="separator mt-4 col-8 mx-auto">
                                New To Upwork?
                            </div>
                            <div className="d-grid gap-2 col-md-5 col-sm-10 mx-auto mt-3   rounded mb-5">
                                <Link className="btn signup" to={`${process.env.REACT_APP_BASE_ROUTE}/sign-up`}>
                                    Sign Up
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
