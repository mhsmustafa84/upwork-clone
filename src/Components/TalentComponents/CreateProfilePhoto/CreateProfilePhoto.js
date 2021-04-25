/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../../firebase";
import { updateUserData } from "../../../Network/Network";

export default function CreateProfilePhoto() {
    const [img, setimg] = useState(null);
    const [imgUrl, setimgUrl] = useState(null);
    const [progress, setprogress] = useState(0);

    const hndlChange = (e) => {
        if (e.target.files[0]) {
            setimg(e.target.files[0]);
        }
    };

    const handlUpload = () => {
        const uploadStep = storage.ref(`images/${img.name}`).put(img);
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
                    .child(img.name)
                    .getDownloadURL()
                    .then((URL) => {
                        let imgu = URL;
                        setimgUrl(imgu);
                        URL && updateUserData("talent", { profilePhoto: URL });
                    });
            }
        );
    };

    // console.log(img);
    return (
        <section className="bg-white border rounded mt-3 pt-4">
            <div className="border-bottom ps-4 pb-3">
                <h4>Profile Photo</h4>
            </div>
            <div className="px-4 my-4">
                <p>
                    Please upload a professional portrait that clearly shows your face.{" "}
                    <Link to="">
                        <i class="fas fa-info-circle"></i>
                    </Link>
                </p>
                <div className="w-25 text-center mt-5">
                    <progress value={progress} max="100" />
                    {imgUrl ? (
                        <img src={imgUrl} />
                    ) : (
                        <i
                            class="fas fa-user-circle fa-7x"
                            style={{ color: "#A0A0A0" }}
                        ></i>
                    )}
                </div>
                <input type="file" onChange={hndlChange} />
                <button onClick={handlUpload}>upload</button>
                <button className="btn border mt-4" style={{ color: "#37a000" }}>
                    <i class="fas fa-plus me-3"></i>Add Profile Photo
                </button>
            </div>
            <div className="px-4 my-3 pt-4 border-top d-flex justify-content-between">
                <Link className="btn border text-success me-4 px-5 fw-bold" to="/home">
                    Back
                </Link>
                <Link className="btn bg-upwork px-5" to="/create-profile/location">
                    Next
                </Link>
            </div>
        </section>
    );
}
