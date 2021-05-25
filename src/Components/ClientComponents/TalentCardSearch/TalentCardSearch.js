
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ImgWithActiveStatus from "./../../../Components/ClientComponents/ImgWithActiveStatus/ImgWithActiveStatus";
import { useDispatch, useSelector } from "react-redux";
import { talentDataAction } from "../../../Store/actions/talentData";
import ShowMore from 'react-show-more-button/dist/module';
import { SearchContext } from "../../../Context/SearchContext";




export default function TalentCardSearch() {
    const { t } = useTranslation();
    const user = useSelector((state) => state.talentData);
  const { talentArr } = useContext(SearchContext)
  useEffect(() => {
    console.log(talentArr);
   
  }, [talentArr])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(talentDataAction());
  }, []);


  return (
      <div>
        {talentArr?.map((item)=>
        <div className="row border bg-white border-1">
        <div className="col-1 pt-lg-3">
        <ImgWithActiveStatus />
        </div>
        <div className="col-lg-6 pt-lg-3 ">
        <a
        href
        id="job-title-home-page "
        className="link-dark job-title-hover "
        >
        <p className="fw-bold text-success">{item.firstName} {"  "} {item.lastName}</p>
        </a>
        <a href id="job-title-home-page " className="link-dark">
        <p className="fw-bold ">{item.title}</p>
        </a>
        <span className="text-muted">{item.location.country}</span>
        <div className="row py-3">
        <div className="col">
        <span className="fw-bold">${item.hourlyRate}</span>
        <span className="text-muted"> /hr</span>
        </div>
        <div className="col">
        <span className="fw-bold">$30</span> +{" "}
        <span className="text-muted"> earned</span>
        </div>
        <div className="col">
        <span>
        {" "}
        <svg
        width="15px"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        aria-hidden="true"
        role="img"
        >
        <polygon
        points="7 0 0 0 0 9.21 7 14 14 9.21 14 0 7 0"
        fill="#1caf9d"
        />
        </svg>
        </span>
        <span className="text-primary"> {t("RISING TALENT")}</span>
        </div>
        <div className="col progress " style={{width:50, height: 10, display: "inline",float:"left"}}>
        <div
        className="progress-bar bg-primary"
        role="progressbar"
        style={{ width: `${user.profileCompletion}%` }}
        aria-valuenow={100}
        aria-valuemin={0}
        aria-valuemax={80}
        >
              <div style={{ fontSize: "0.7em", display: "start" }}>
                {`${user.profileCompletion}%`}
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className="col py-3">
            <div className="btn-group float-end ">
              <button
                type="button"
                className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
                data-toggle="collapse"
                data-target="#collapse"
                aria-expanded="false"
                aria-controls="collapseTwo"
                >
                <i
                  className="far fa-heart"
                  aria-hidden="true"
                  onclick="this.classList.toggle('fas')"
                  />
              </button>
            </div>
            </div>
          
          <div className="col py-3">
            <button type="button" className="btn bg-upwork px-3">
              invite to job
            </button>
          </div>
  
  <div className="col-lg-1 pt-lg-3"></div>
          <div className="col-lg-10 pt-lg-3 mx-3">
          
          </div>
          <ShowMore style={{ fontFamily: "Gotham SSm" }} className="" maxHeight={100} button={<button id="seemorebutton" classname="advanced-search-link " style={{ color: 'green', position: 'absolute', left: 0 }}>
                  more
        </button>}>
        loremip loremiploremip loremip oremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip
  loremip loremiploremip loremip oremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip
  loremip loremiploremip loremip oremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip loremip loremiploremip loremip
  
                </ShowMore>
                <div className="d-flex justify-content-start">
                    {/* {user?.skills?.map((item) => */}
                      <div className="chip mb-3 ms">
                        <span>vsss</span>
                      </div>
                      <div className="chip mb-3 ms">
                        <span>vsss</span>
                      </div>
                      <div className="chip mb-3 ms">
                        <span>vsss</span>
                      </div>
                    {/* )} */}
                  
                  </div>
        </div>
        )}
      </div>
      )
    }
    