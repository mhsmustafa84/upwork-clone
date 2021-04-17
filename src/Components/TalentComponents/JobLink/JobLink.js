import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default class JobLink extends Component {
  state = {
    value: "https://www.upwork.com/jobs/~013341eba25b4755dd",
    copied: false,
  };
  render() {
    return (
      <div className="bg-white pb-lg-2 px-4 border border-1 row py-xs-5 ">
        <h5 className="py-lg-2">Job link</h5>
        <input
          value={this.state.value}
          onChange={({ target: { value } }) =>
            this.setState({ value, copied: false })
          }
          className="form-control my-3"
          type="text"
          defaultValue={JobLink}
          aria-label="Disabled input example"
          disabled
        />

        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <button
            href
            className="text-success fw-bold py-1 my-3 cursor-pointer bg-white border border-0 a"
          >
            Copy Link
          </button>
        </CopyToClipboard>
      </div>
    );
  }
}
