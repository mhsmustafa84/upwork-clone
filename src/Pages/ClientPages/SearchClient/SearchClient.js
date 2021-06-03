import React, { useContext, useEffect, useState } from "react";
import ImgWithActiveStatus from "./../../../Components/ClientComponents/ImgWithActiveStatus/ImgWithActiveStatus";
import { useDispatch, useSelector } from "react-redux";
import ShowMore from 'react-show-more-button/dist/module';
import { SearchContext } from "../../../Context/SearchContext";
import { updateUserData } from "../../../Network/Network";
import { clientDataAction } from "../../../Store/actions/clientData";
import searchSvg from '../../../assets/svg/search.svg'
import { Link } from "react-router-dom";





export default function TalentCardSearch() {
  const { talentArr , talentSearchList} = useContext(SearchContext)
  const client = useSelector((state) => state.clientData);
  const [isliked, setisliked] = useState(false)
  const dispatch = useDispatch();
  console.log(talentArr);
  useEffect(() => {
    dispatch(clientDataAction());
}, []);
  
  useEffect(() => {
    dispatch(clientDataAction());
  }, [isliked]);

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
      {talentArr.length === 0 && talentSearchList !== "" ?
                        <div className='col-12 bg-white'>

                            <h3 className="fw-bold text-center py-2 pt-5 " style={{ color: '#124C82' }}>There are no results that match your search</h3>

                            <h6 className="text-center " style={{ color: '#124C82' }}>Please try adjusting your search keywords or filters</h6>

                            <img className='mx-auto d-block' src={searchSvg} />

                        </div>
                        :
                        null
                    }
      {talentArr?.map((item) =>
        <div className="row border bg-white border-1 px-3 py-3" key={item.authID}>
          <div className="col-1 pt-lg-3">
            <ImgWithActiveStatus avatar={item?.profilePhoto} />
          </div>
          <div className="col-lg-6 pt-lg-3 ">
            <Link
              to={`/talent-profile/${item.authID}`}
              id="job-title-home-page "
              className="link-dark job-title-hover "
            >
              <p className="fw-bold text-success">{item.firstName} {"  "} {item.lastName}</p>
            </Link>
            <a href id="job-title-home-page " className="link-dark">
              <p className="fw-bold ">{item.title}</p>
            </a>
            <span className="text-muted">{item.location?.country}</span>
            <div className="row py-3">
              <div className="col">
                <span className="fw-bold">${item.hourlyRate}</span>
                <span className="text-muted"> /hr</span>
              </div>
              <div className="col">
                <span className="fw-bold">${item.totalEarnings}</span> +{" "}
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
                <span className="text-primary"> {item.badge?.risingTalent}</span>
              </div>
              <div className="col progress " style={{ width: 50, height: 10, display: "inline", float: "left" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: `${item.profileCompletion}%` }}
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={80}
                >
                  <div style={{ fontSize: "0.7em", display: "start" }}>
                    {`${item.profileCompletion}%`}
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
                <i onClick={(e) => saveTalent(e, item.authID)} className={`${client?.savedTalent?.includes(item.authID) ? 'fas fa-heart text-upwork' : 'far fa-heart'}`} aria-hidden="true" />
              </button>
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
          <div className="row mx-5 px-5">
          <ShowMore className="" maxHeight={100} button={<button id="seemorebutton" classname="advanced-search-link " style={{ color: 'green', position: 'absolute', left: 0 }}>
            more
        </button>}>
            {item.overview}

          </ShowMore>
          <div className="d-flex justify-content-start">
            {item.skills?.map((e) =>
              <div className="chip mb-3 ms">
                <span>{e}</span>
              </div>
            )}

          </div>
        
          </div>
          </div>
      )}
    </div>
  )
}