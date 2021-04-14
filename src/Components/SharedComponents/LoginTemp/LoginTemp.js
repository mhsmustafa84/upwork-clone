import React from "react";
import apple from "../../../assets/svg/apple.svg";

export default function LoginTemp() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-5  mx-auto">
            <div class="shadow-sm p-3 mb-5 bg-white rounded mx-auto mt-5 w-100  border ">
              <h5 data-v-904d5b16 class="text-center m-0">
                <span data-v-733406b2 data-v-44072c38>
                  Log in and get to work
                </span>
              </h5>
              <form>
                <div class="form-group col-8 mx-auto mt-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Username or Email"
                  />
                </div>
                <div class="d-grid gap-2 col-8 mx-auto mt-3 hitbtn-class loginpcolor">
                  <button class="btn bg-upwork " type="button">
                    Continue
                  </button>
                </div>
                <div class="separator mt-4 col-8 mx-auto">or</div>
                <div class="google-btn  gap-2 mx-auto mt-3 rounded hitbtn-class col-sm-12">
                  <div class="google-icon-wrapper">
                    <img
                      class="google-icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <div className="text-justify ">
                    <p
                      class="text-center text-white"
                      style={{ paddingTop: ".3em" }}
                    >
                      Sign in with google
                    </p>
                  </div>
                </div>
                <div class="mb-5 d-grid gap-2 col-8 mx-auto mt-3 border border-dark rounded">
                  <button class="btn bg-light " type="button">
                    {" "}
                    <img src={apple} class="apple-icon" />
                    sign in with apple
                  </button>
                </div>
                <hr />
                <div>
                  <div class="separator mt-4 col-8 mx-auto">New to Upwork?</div>
                  <div class="d-grid gap-2 col-md-5 col-sm-10 mx-auto mt-3   rounded mb-5">
                    <button class="btn signup" type="button">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
