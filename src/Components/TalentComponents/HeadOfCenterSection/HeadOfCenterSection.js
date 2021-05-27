/* eslint-disable */
import React from "react";
import { useTranslation } from "react-i18next";

export default function HeadOfCenterSection() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="list-group-item my-lg-2 pt-3 rounded text-center ">
        <h6>
          <a href="#" className="text-decoration-none" style={{color:'#3CAF24'}}>
            {" "}
            {t("There are new jobs. Click to see them")}
          </a>
        </h6>
      </div>
      <div className="list-group-item pt-lg-4 pb-lg-3 px-4 border-bottom-0 border-top rounded-top">
        <h4>
         
          {t("My Feed")}
          <span>
            <div className="btn-group float-sm-end ">
              <button
                type="button"
                className=" btn btn-light dropdown-toggle border border-1 rounded-circle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-h " />
              </button>
              <ul className="dropdown-menu" style={{fontSize:'13px'}}>
                <li>
                  <a className="dropdown-item " href="#">
                    RSS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Atom
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </h4>
      </div>
    </div>
  );
}
