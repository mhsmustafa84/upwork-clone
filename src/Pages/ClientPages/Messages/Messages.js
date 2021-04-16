import React from "react";
import MesssagesContent from "../../../Components/ClientComponents/MessagesContent/MesssagesContent";
import MessagesLeftSide from "../../../Components/ClientComponents/MesssagesLeftSide/MessagesLeftSide";
import "./Messages.css";
export default function Messages() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <aside className="col-3 d-none-md">
            <MessagesLeftSide />
          </aside>
          <div className="col-sm-12 col-md-9 mx-auto">
            <MesssagesContent />
          </div>
        </div>
      </div>
    </>
  );
}
