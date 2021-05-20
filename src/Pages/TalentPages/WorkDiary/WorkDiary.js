import React from "react";
import { useTranslation } from "react-i18next";

export default function WorkDiary() {
  const { t } = useTranslation();
  return (
    <>
      <div className=" bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 my-5">
              <h4>{t("Work diary")}</h4>
            </div>
            <div className="col-12 bg-white mb-3 p-5 border border-gray rounded">
              <div className="col-11 mx-auto bg-gray border border-gray rounded p-5 mb-4">
                <span className>
                  <span className="circle">
                    <i className="fas fa-exclamation dangericon pt-2" />
                  </span>
                  {t("Currently you have no active jobs")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
