import React from "react";

export default function MesssagesContent() {
  return (
    <div className="card bg-white mt-2 mb-5">
      <div className="mesgs">
        <div className="msg_history">
          <div className="incoming_msg">
            <div className="incoming_msg_img">
              {" "}
              <img
                src="https://ptetutorials.com/assets/img/user-profile.png"
                alt="sunil"
              />{" "}
            </div>
            <div className="received_msg">
              <div className="received_withd_msg">
                <p>Test which is a new approach to have all solutions</p>
                <span className="time_date"> 11:01 AM | June 9</span>
              </div>
            </div>
          </div>
          <div className="outgoing_msg">
            <div className="sent_msg">
              <p>Test which is a new approach to have all solutions</p>
              <span className="time_date"> 11:01 AM | June 9</span>{" "}
            </div>
          </div>
          <div className="incoming_msg">
            <div className="incoming_msg_img">
              {" "}
              <img
                src="https://ptetutorials.com/assets/img/user-profile.png"
                alt="sunil"
              />{" "}
            </div>
            <div className="received_msg">
              <div className="received_withd_msg">
                <p>Test, which is a new approach to have</p>
                <span className="time_date"> 11:01 AM | Yesterday</span>
              </div>
            </div>
          </div>
          <div className="outgoing_msg">
            <div className="sent_msg">
              <p>Apollo University, Delhi, India Test</p>
              <span className="time_date"> 11:01 AM | Today</span>{" "}
            </div>
          </div>
          <div className="incoming_msg">
            <div className="incoming_msg_img">
              {" "}
              <img
                src="https://ptetutorials.com/assets/img/user-profile.png"
                alt="sunil"
              />{" "}
            </div>
            <div className="received_msg">
              <div className="received_withd_msg">
                <p>
                  We work directly with our designers and suppliers, and sell
                  direct to you, which means quality, exclusive products, at a
                  price anyone can afford.
                </p>
                <span className="time_date"> 11:01 AM | Today</span>
              </div>
            </div>
          </div>
        </div>

        <div className="type_msg">
          <div className="input_msg_write">
            <input type="text" className="form-control write_msg" placeholder="Type a message" />
            <button className="msg_send_btn" type="button">
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
