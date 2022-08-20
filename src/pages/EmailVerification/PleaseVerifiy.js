/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import verify from "../../assets/svg/verifyEmail.svg";
import { auth } from '../../firebase';


export default function PleaseVerifiy() {
  const handleResend = () => {
    auth.currentUser.sendEmailVerification();
  }
  return (
    <div className="text-center" style={{ margin: "67px 0" }}>
      <img src={verify} style={{ width: "150px" }} />
      <h3 className="my-3">Verify your email to proceed</h3>
      <span className="d-block text-secondary">We just sent an email to the address: polewav615@rphinfo.com</span>
      <span className="d-block text-secondary">Please check your email and click on the link provided to verify your address.</span>
      {/* <Link className="d-block text-success py-3"><i class="fas fa-chevron-circle-down px-2 "></i>Change Email</Link>
      <Link className="d-block text-success py-3"><i class="fas fa-chevron-circle-down px-2 "></i>I need help verifing my email</Link> */}
      <button className="btn bg-upwork mt-4 rounded-pill px-5 py-2" onClick={handleResend}>
        Resend verification Email
      </button>
      <br />
    </div>
  )
}
