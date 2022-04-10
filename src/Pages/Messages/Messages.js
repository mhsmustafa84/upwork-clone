import React from "react";
import "./Messages.css";
import MesssagesContent from "../../components/shared/MessagesContent/MesssagesContent";
import MessagesLeftSide from "../../components/shared/MesssagesLeftSide/MessagesLeftSide";

export default function Messages({ location }) {
    console.log(location.state);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <aside className="col-3 d-none-md">
                        <MessagesLeftSide talentID={location.state} />
                    </aside>
                    <div className="col-sm-12 col-md-9">
                        <MesssagesContent />
                    </div>
                </div>
            </div>
        </>
    );
}
