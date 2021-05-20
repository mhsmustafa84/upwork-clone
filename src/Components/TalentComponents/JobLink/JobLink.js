

import React, { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";


export default function JobLink() {
  const [state, setstate] = useState({
    value: "https://www.upwork.com/jobs/~013341eba25b4755dd",
    copied: false,
  });
  // state = {
  //       value: "https://www.upwork.com/jobs/~013341eba25b4755dd",
  //       copied: false,
  //     };
  return (
          <div className="bg-white pb-lg-2 px-4 border border-1 row py-xs-5 ">
            <h5 className="py-lg-2">Job link</h5>
            <input
              onInput={({ target: { value } }) =>
                setstate({ value, copied: false })
              }
              className="form-control my-3"
              type="text"
              defaultValue={JobLink}
              aria-label="Disabled input example"
              disabled
            />
    
            <CopyToClipboard
              text={state.value}
              onCopy={() => this.setState({ copied: true })}
            >
              <button
                className="text-success fw-bold py-1 my-3 cursor-pointer bg-white border border-0 a"
              >
                Copy Link
              </button>
            </CopyToClipboard>
          </div>
        );
}
