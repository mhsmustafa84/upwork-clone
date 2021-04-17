import React from "react";
import '../../../assets/Style/style.css'
import MesssagesContent from "../../../Components/ClientComponents/MessagesContent/MesssagesContent";
import MessagesLeftSide from "../../../Components/ClientComponents/MesssagesLeftSide/MessagesLeftSide";

export default function Messages() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <aside className="col-3 d-none-md">
                        <MessagesLeftSide />
                    </aside>
                    <div className="col-sm-12 col-md-9">
                        <MesssagesContent />
                    </div>
                </div>
            </div>
        </>
    );
}
