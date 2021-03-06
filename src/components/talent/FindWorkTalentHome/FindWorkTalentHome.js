/* eslint-disable */
import React, { useState } from "react";

import { fbAuth } from "../../../firebase";
import SearchBarJobsTalent from "../SearchBarJobsTalent/SearchBarJobsTalent";


export default function FindWorkTalentHome() {


    const [verify, setverify] = useState(false);
    fbAuth.auth.onAuthStateChanged(user => {
        if (user) {
            var verf = user.emailVerified;
            setverify(verf);
        }
    });

    return (
        <div className="d-none d-lg-block" >
            <div className="row my-lg-4">
                <div className="col">
                    <h4 style={{ fontWeight: '500' }}>FindWork</h4>
                </div>
                <div className="col-8">
                    <SearchBarJobsTalent />
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}
