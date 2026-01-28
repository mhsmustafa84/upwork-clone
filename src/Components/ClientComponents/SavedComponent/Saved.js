import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import ShowMore from 'react-show-more-button/dist/module';
import { db } from '../../../firebase';
import { updateUserData } from '../../../Network/Network';
import { clientDataAction } from '../../../Store/actions/clientData';
import ImgWithActiveStatus from '../ImgWithActiveStatus/ImgWithActiveStatus';


export default function Saved({ talentId, isliked, setisliked }) {
  const { t } = useTranslation();
  const [talentSaved, settalentSaved] = useState({});
  const client = useSelector((state) => state.clientData);
  const dispatch = useDispatch();
  console.log(talentId);
  useEffect(() => {
    dispatch(clientDataAction());
    db.collection("talent")
      .doc(talentId)
      .get()
      .then((res) => {
        settalentSaved(res.data());
      });
  }, []);

  useEffect(() => {
    console.log(talentSaved)
    dispatch(clientDataAction());
  }, [isliked])


  const saveTalent = (e, id) => {
    setisliked(!isliked)
    if (e.target.className === 'far fa-heart') {
      updateUserData("client", { savedTalent: [...client?.savedTalent, id] });
      e.target.className = 'fas fa-heart text-upwork'

    }
    else {
      client?.savedTalent?.forEach((item, index) => {
        if (item === id) {
          client?.savedTalent?.splice(index, 1);
          updateUserData("client", { savedTalent: [...client?.savedTalent] });
          e.target.className = 'far fa-heart'

        }
      })
    }
  }
  return (
    <div>

      <div className="row border bg-white border-1">
        <div className="col-1 pt-lg-3">
          <ImgWithActiveStatus avatar={talentSaved?.profilePhoto}/>
        </div>
        <div className="col-lg-6 pt-lg-3 ">
          <a
            href="#"
            id="job-title-home-page "
            className="link-dark job-title-hover "
          >
            <p className="fw-bold text-success">{talentSaved?.firstName} {"  "} {talentSaved?.lastName}</p>
          </a>
          <a href id="job-title-home-page " className="link-dark">
            <p className="fw-bold ">{talentSaved?.title}</p>
          </a>
          <span className="text-muted">{talentSaved?.location?.country}</span>
          <div className="row py-3">
            <div className="col">
              <span className="fw-bold">${talentSaved?.hourlyRate}</span>
              <span className="text-muted"> /hr</span>
            </div>
            <div className="col">
              <span className="fw-bold">${talentSaved?.totalEarnings}</span> +{" "}
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
              <span className="text-primary"> {talentSaved?.badge?.risingTalent}</span>
            </div>
            <div className="col progress " style={{ width: 50, height: 10, display: "inline", float: "left" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: `${talentSaved?.profileCompletion}%` }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={80}
              >
                <div style={{ fontSize: "0.7em", display: "start" }}>
                  {`${talentSaved?.profileCompletion}%`}
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
              <i onClick={(e) => saveTalent(e, talentSaved?.authID)} className={`${client?.savedTalent?.includes(talentSaved?.authID) ? 'fas fa-heart text-upwork' : 'far fa-heart'}`} aria-hidden="true" />
            </button>
          </div>
         </div>
         <div className="row px-5 mx-5">
            <ShowMore className="" maxHeight={100} button={<button id="seemorebutton" classname="advanced-search-link " style={{ color: 'green', position: 'absolute', left: 0 }}>
              more
        </button>}>
              {talentSaved?.overview}

            </ShowMore>
            <div className="d-flex justify-content-start">
              {talentSaved?.skills?.map((e) =>
                <div className="chip mb-3 ms">
                  <span>{e}</span>
                </div>
              )}

            </div>

          </div>
        
        {/* <div className="col py-3">
            <button type="button" className="btn bg-upwork px-3">
              invite to job
            </button>
          </div> */}

        <div className="col-lg-1 pt-lg-3"></div>
        <div className="col-lg-10 pt-lg-3 mx-3">

        </div>
      </div>

    </div>
  )
}
