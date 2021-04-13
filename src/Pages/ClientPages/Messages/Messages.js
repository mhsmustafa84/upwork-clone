import React from "react";
import Header from "../../../Components/ClientComponents/Header/Header";
import MessagesLeftSide from "../../../Components/ClientComponents/MesssagesLeftSide/MessagesLeftSide";

export default function Messages() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div class="row">
          <aside class="col-3 d-none-md">
            <MessagesLeftSide />
          </aside>
        </div>
      </div>
    </>
  );
}
