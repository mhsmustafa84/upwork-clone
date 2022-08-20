/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, storage } from "../../../firebase";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfilePhoto({ setBtns, btns }) {
    const [imgUrl, setimgUrl] = useState(null);
    const [progress, setprogress] = useState(0);

    const getData = ({ target }) => {
        if (target.files[0]) {
            const uploadStep = storage.ref(`images/${target.files[0].name}`).put(target.files[0]);
            uploadStep.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setprogress(progress);
                },
                (err) => {
                    console.log(err);
                },
                () => {
                    storage
                        .ref("images")
                        .child(target.files[0].name)
                        .getDownloadURL()
                        .then((URL) => {
                            let imgu = URL;
                            setimgUrl(imgu);
                            URL &&
                                updateUserData("talent", {
                                    profilePhoto: URL,
                                    profileCompletion: 80,
                                });
                            URL && auth.currentUser.updateProfile({ photoURL: URL });
                        });
                }
            );
        }
    };



    return (
        <section className="bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4 pb-3">
                <h4>Profile Photo</h4>
            </div>
            <div className="px-4 my-4">
                <p>
                    Please upload a professional portrait that clearly shows your face.{" "}
                    <Link to="">
                        <i className="fas fa-info-circle"></i>
                    </Link>
                </p>
                <div className="w-25 text-center mt-5">
                    {/* <progress className="w-100" value={progress} max="100" /> */}
                    <div className="mb-3" style={{ width: progress * 2, height: "5px", backgroundColor: "#37A000" }}></div>
                    {imgUrl ? (
                        <div style={{ width: "100px", height: "100px", margin: "0 auto" }}>
                            <img className="w-100 h-100 circle" src={imgUrl} />
                        </div>
                    ) : (
                        <i
                            className="fas fa-user-circle fa-7x"
                            style={{ color: "#A0A0A0" }}
                        ></i>
                    )}
                </div>
                <label
                    className="btn border border-2 mt-4 rounded-5"
                    for="img"
                    style={{ color: "#37a000" }}
                >

                    <i className="fas fa-plus me-3"></i>Add Profile Photo
        </label>
                <input
                    id="img"
                    className="d-none"
                    type="file"
                    onInput={getData}
                />
            </div>
            <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
                <button className="btn">
                    <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">
                        Back
                    </Link>
                </button>
                <button className={`btn ${progress < 100 && "disabled"}`}>
                    <Link className="btn bg-upwork px-5" to="/create-profile/location" onClick={() => setBtns({ ...btns, location: false })}>
                        Next
                    </Link>
                </button>
            </div>
        </section>
    );
}
