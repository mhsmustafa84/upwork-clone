import React from "react";

export default function ContractFeedback({ job }) {
    return (
        <div className="row pt-4 pb-5 ps-4 mt-3">
            <div className="col">

                {
                    job?.status === "closed" && job?.clientJobReview?.review ?
                        <>
                            <h4>Client's Feedback to You</h4>
                            <div>
                                <div>
                                    <small>
                                        <i className="fas fa-star text-bgUpwork"></i>
                                        <i className="fas fa-star text-bgUpwork"></i>
                                        <i className="fas fa-star text-bgUpwork"></i>
                                        <i className="fas fa-star text-bgUpwork"></i>
                                        <i className="fas fa-star text-bgUpwork"></i>
                                    </small>
                                </div>
                                <p>great freelancer to work with</p>
                            </div>
                        </>
                        : job?.status === "closed" && !(job?.clientJobReview?.review) ?
                            <p>No Feedback Received</p>
                            : ""
                }
            </div>

            {job?.status !== "closed" &&
                <div className="col-12 text-center">
                    <svg
                        role="img"
                        viewBox="0 0 145 130"
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                    >
                        <circle
                            cx="72.5"
                            cy="65"
                            fill="gray"
                            r="64.5"
                        ></circle>
                        <path
                            d="M8.7 74.3c4.5 31.2 31.4 55.2 63.8 55.2 32.5 0 59.3-24 63.8-55.2H8.7z"
                            fill="darkgray"
                        ></path>
                        <path
                            d="M116 103.6H48.2c-.3 0-.6-.1-.7-.3L26 79.6c-.6-.6-.1-1.7.7-1.7h67.7c.3 0 .6.1.7.3l21.5 23.6c.7.8.2 1.8-.6 1.8z"
                            fill="white"
                        ></path>
                        <path
                            d="M45.8 84.3l-.2-49.7c0-.6.4-1 1-1H82l3.8-6.7c.2-.3.5-.5.9-.5h22.6c.4 0 .7.2.9.5l3.4 6.6h3c.6 0 1 .5 1 1l-.1 50.9-71.7-1.1z"
                            fill="#37a000"
                        ></path>
                        <path
                            d="M22 56.2h67c.3 0 .5.1.7.3l27.7 29-71.1-1.2c-.3 0-.5-.1-.7-.3L21.3 57.9c-.6-.7-.1-1.7.7-1.7zm39.9 38.7c-.2 0-.4-.2-.4-.4s.2-.4.4-.4h2.2c.2 0 .4.2.4.4s-.2.4-.4.4h-2.2z"
                            fill="#008329"
                        ></path>
                        <path
                            d="M63.3 94.9s.3-.1.3-.4c0-.2-.1-.3-.3-.4l-5.2-2.4v5.5l5.2-2.3z"
                            fill="#008329"
                        ></path>
                        <rect
                            height="28.1"
                            width="5.5"
                            fill="gray"
                            transform="rotate(90 44.116 94.49)"
                            x="41.4"
                            y="80.4"
                        ></rect>
                        <path
                            d="M27.2 95.1v-1.3c0-1.2.9-2.1 2.1-2.1h.8v5.5h-.8c-1.2 0-2.1-.9-2.1-2.1z"
                            fill="#008329"
                        ></path>
                    </svg>
                    <p className="h5">This contract is not yet eligible for feedback</p>
                </div>
            }

            <div className="col">

                {
                    job?.status === "closed" && job?.talentJobReview?.review ?
                        <>
                            <h4>Your Feedback to Client</h4>
                            <div>
                                <small>
                                    <i className="fas fa-star text-bgUpwork"></i>
                                    <i className="fas fa-star text-bgUpwork"></i>
                                    <i className="fas fa-star text-bgUpwork"></i>
                                    <i className="fas fa-star text-bgUpwork"></i>
                                    <i className="fas fa-star text-bgUpwork"></i>
                                </small>
                            </div>
                            <p>great client to work with</p>
                        </>
                        : job?.status === "closed" && !(job?.talentJobReview?.review) ?
                            <p>No Feedback Given</p>
                            : ""
                }
            </div>
        </div>
    );
}
