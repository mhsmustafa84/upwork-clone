import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function JobLink() {
  let his = useNavigate()

  const [state, setstate] = useState({
    value: `http://localhost:3000${his.location.pathname}`,
    copied: false,
  });

  const { t } = useTranslation();

  return (
    <div className="bg-white pb-lg-2 px-4 border border-1 py-xs-5 h-100">
      <h5 className="py-lg-2">{t("Job link")}</h5>
      <input
        onInput={({ target: { value } }) => setstate({ value, copied: false })}
        className="form-control my-3"
        type="text"
        defaultValue={state.value}
        aria-label="Disabled input example"
        disabled
      />

      <CopyToClipboard
        text={state.value}
        onCopy={() => setstate({ copied: true })}
      >
        <button className="text-success fw-bold py-1 my-3 cursor-pointer bg-white border border-0 a">
          {t("Copy Link")}
        </button>
      </CopyToClipboard>
    </div>
  );
}
