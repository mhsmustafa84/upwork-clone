import React from "react";
import Header from "../../../Components/ClientComponents/Header/Header";
import MesssagesContent from "../../../Components/ClientComponents/MessagesContent/MesssagesContent";
import MessagesLeftSide from "../../../Components/ClientComponents/MesssagesLeftSide/MessagesLeftSide";
import "./Messages.css";
export default function Messages() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div class="row">
          <aside class="col-3 d-none-md">
            <MessagesLeftSide />
          </aside>
          <div class="col-sm-12 col-md-9">
            <MesssagesContent />
          </div>
        </div>
      </div>
    </>
  );
}
