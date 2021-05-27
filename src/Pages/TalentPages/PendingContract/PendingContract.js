import React from 'react'

export default function PendingContract() {
    return (
        <>
            <div className=" bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12 my-5">
                            <h4>Pending Contracts</h4>
                        </div>
                        <div className="col-12 bg-white mb-3 p-5 border border-gray rounded">
                            <div className="col-11 mx-auto bg-gray border border-gray rounded p-5 mb-4">
                                <span className>
                                    <span className="circle">
                                        <i className="fas fa-exclamation dangericon pt-2" />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
