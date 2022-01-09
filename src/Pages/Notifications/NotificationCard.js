import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../assets/Img/icon-user.svg";
import { auth, db } from '../../firebase';


export default function NotificationCard({ notification, collectionName, getNotifications }) {

    const { data, docID } = notification;

    const remove = () => {
        db.collection(collectionName)
            .doc(auth.currentUser.uid)
            .collection("notification")
            .doc(docID)
            .delete().then(res => getNotifications())
    }

    const updateShow = () => {
        db.collection(collectionName)
            .doc(auth.currentUser.uid)
            .collection("notification")
            .doc(docID).update({ isShow: true })
    }


    return (
        <div className="row border border-1 py-4 px-2" style={{ backgroundColor: data.isShow ? "white" : "#e1f5b1" }}>
            <div className="col-1">
                <img style={{ height: "40px", width: "40px" }} className="rounded-circle bg-white" src={data?.userPhoto ? data?.userPhoto : img} alt="" />
            </div>
            <p className="col-3">{new Date(data?.time.seconds * 1000).toLocaleString()}</p>
            <p className="col-2">{data?.type}</p>
            <Link style={{ display: "contents" }}
                to={data?.route}
                onClick={updateShow}
            >
                <p className="col-5">
                    {data?.message}
                </p>
            </Link>
            <div className="col-1" style={{ cursor: "pointer" }} onClick={remove}>
                <i className="fas fa-times text-danger fs-4"></i>
            </div>
        </div>
    )
}
