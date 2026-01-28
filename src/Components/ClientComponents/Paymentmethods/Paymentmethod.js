import React from "react";
export default function Paymentmethods() {
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Payment methods
              </h5>
              <div className="modal-body">
                <div className="text-right">
                  {" "}
                  <i className="fa fa-close close" data-dismiss="modal" />{" "}
                </div>
                <div className="tabs mt-3">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      {" "}
                      <a
                        className="nav-link active"
                        id="visa-tab"
                        data-toggle="tab"
                        href="#visa"
                        role="tab"
                        aria-controls="visa"
                        aria-selected="true"
                      >
                        {" "}
                        <img
                          src="https://i.imgur.com/sB4jftM.png"
                          width={80}
                        />{" "}
                      </a>{" "}
                    </li>
                    <li className="nav-item" role="presentation">
                      {" "}
                      <a
                        className="nav-link"
                        id="paypal-tab"
                        data-toggle="tab"
                        href="#paypal"
                        role="tab"
                        aria-controls="paypal"
                        aria-selected="false"
                      >
                        {" "}
                        <img
                          src="https://i.imgur.com/yK7EDD1.png"
                          width={80}
                        />{" "}
                      </a>{" "}
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="visa"
                      role="tabpanel"
                      aria-labelledby="visa-tab"
                    >
                      <div className="mt-4 mx-4">
                        <div className="text-center">
                          <h5>Credit card</h5>
                        </div>
                        <div className="form mt-3">
                          <div className="inputbox">
                            {" "}
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              required="required"
                            />{" "}
                            <span>Cardholder Name</span>{" "}
                          </div>
                          <div className="inputbox">
                            {" "}
                            <input
                              type="text"
                              name="name"
                              min={1}
                              max={999}
                              className="form-control"
                              required="required"
                            />{" "}
                            <span>Card Number</span> <i className="fa fa-eye" />{" "}
                          </div>
                          <div className="d-flex flex-row">
                            <div className="inputbox">
                              {" "}
                              <input
                                type="text"
                                name="name"
                                min={1}
                                max={999}
                                className="form-control"
                                required="required"
                              />{" "}
                              <span>Expiration Date</span>{" "}
                            </div>
                            <div className="inputbox">
                              {" "}
                              <input
                                type="text"
                                name="name"
                                min={1}
                                max={999}
                                className="form-control"
                                required="required"
                              />{" "}
                              <span>CVV</span>{" "}
                            </div>
                          </div>
                          <div className="px-5 pay">
                            {" "}
                            <button className="btn bg-upwork btn-block">
                              Add card
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="paypal"
                      role="tabpanel"
                      aria-labelledby="paypal-tab"
                    >
                      <div className="px-5 mt-5">
                        <div className="inputbox">
                          {" "}
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            required="required"
                          />{" "}
                          <span>Paypal Email Address</span>{" "}
                        </div>
                        <div className="pay px-5">
                          {" "}
                          <button className="btn btn-primary btn-block">
                            Add paypal
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
