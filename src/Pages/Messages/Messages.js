import React from "react";
import '../../assets/Style/style.css'
import "./Messages.css";
import MesssagesContent from "../../Components/SharedComponents/MessagesContent/MesssagesContent";
import MessagesLeftSide from "../../Components/SharedComponents/MesssagesLeftSide/MessagesLeftSide"

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
