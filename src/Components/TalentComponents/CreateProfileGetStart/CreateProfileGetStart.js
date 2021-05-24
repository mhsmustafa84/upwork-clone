import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateProfileGetStart({ setBtns, btns }) {
    return (
        <section className=" bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4">
                <h4>Fill out your profile to apply</h4>
            </div>
            <div className="px-4 mt-3">
                <p className="fw-bold mt-2">To provide a high quality experience to all customers, admission to Upwork is highly competitive.</p>
                <div className="my-4">
                    <p>Here’s how it works:</p>
                    <ol className="list">
                        <li>Fill out your profile thoroughly and accurately</li>
                        <li>Submit your profile</li>
                        <li>You’ll receive an email within 24 hours to let you know if you were accepted</li>
                    </ol>
                    <p>We are currently experiencing a high number of applications. Create a stand-out profile to increase your chances of getting approved!</p>
                </div>
                <div className="my-4 text-end">
                    <Link className="btn bg-upwork" to="/create-profile/category" onClick={() => setBtns({ ...btns, category: false })}>Start My Profile</Link>
                </div>
            </div>
        </section>
    )
}
