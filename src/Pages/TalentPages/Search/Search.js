import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SearchContext } from '../../../Context/SearchContext'
import searchSvg from '../../../assets/svg/search.svg'
import SearchBarJobsTalent from "../../../Components/TalentComponents/SearchBarJobsTalent/SearchBarJobsTalent";

export default function Search(props) {
    const { t } = useTranslation();
    const [searchData, setsearchData] = useState([]);
    const [filterSearch, setfilterSearch] = useState([]);
    const { itemSearchList } = useContext(SearchContext);
    const [filtered, setfiltered] = useState(false)
    

    useEffect(() => {
        let arr = props.location.state
        setsearchData(arr)
        //console.log(arr);
    }, [props.location.state])

    useEffect(() => {
        // console.log(filterSearch);
    }, [itemSearchList,filterSearch])
    //filter level expereince
const handleLevel=(e)=>{
    let val=e.target.checked;
    let name=e.target.name;
    switch (name) {
        case 'entry level':
        //    val ?
        // (filterSearch.length!=0 ?
        // setfilterSearch([...filterSearch,searchData.filter((item)=>item.jobExperienceLevel==name  && item)])
        // :setfilterSearch(searchData.filter((item)=>item.jobExperienceLevel==name  && item))
        // )
        // :setfilterSearch(filterSearch.filter(item=>item.jobExperienceLevel!=name&& item))
        setfilterSearch(searchData.filter((item)=>item.jobExperienceLevel==name &&val && item))
        console.log(filterSearch);
            setfiltered(val); 
            break;
            case 'intermediate':
                setfilterSearch(searchData.filter((item)=>item.jobExperienceLevel==name && val && item))
                setfiltered(val);
                // val ?
                // (filterSearch.length!=0 ?
                //     setfilterSearch([...filterSearch,searchData.filter((item)=>item.jobExperienceLevel==name  && item)])
                //     :setfilterSearch(searchData.filter((item)=>item.jobExperienceLevel==name  && item))
                //     )
                //     :setfilterSearch(filterSearch.filter(item=>item.jobExperienceLevel!=name&& item))    
                break;
                case 'expert':
                setfiltered(val);
            setfilterSearch(searchData.filter((item)=>item.jobExperienceLevel==name &&val && item))
            break;
    
        default:
            break;
    }
    // console.log(e.target.name, e.target.checked);
}
    return (
        <div className="container-md container-fluid-sm my-lg-4">
            <div className="row">
                <div className="col d-none d-lg-block">
                    <h5 className="mb-lg-4 display-inline-block">{t("FilterBy")}</h5>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">{t("Category")}</h6>
                    <ul
                        className="list-group sidebar-homebage-ul mb-lg-3 "
                        style={{ fontSize: "0.9em" }}
                    >

                        <li
                            className="list-group-item sidebar-homebage-ul-li"
                            aria-current="true"
                        >
                            <a
                                href="#"
                                className=" list-group-item-action advanced-search-link"
                                aria-current="true"
                            >
                                {t("EcommerceDevelopment")}
                            </a>{" "}
                        </li>
                        <li
                            className="list-group-item sidebar-homebage-ul-li"
                            aria-current="true"
                        >
                            <a
                                href="#"
                                className=" list-group-item-action advanced-search-link"
                                aria-current="true"
                            >
                                {t("EcommerceDevelopment")}
                            </a>{" "}
                        </li>
                    </ul>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">Freelancers needed</h6>
                    <div>
                        <div className="form-check py-2 my-0">
                            <input
                                className="form-check-input btn-outline-success"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                {t("All")}
                            </label>
                        </div>
                        <div className="form-check py-2 my-0">
                            <input
                                className="form-check-input btn-outline-success"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                {t("Singlefreelancer")}
                            </label>
                        </div>
                        <div className="form-check py-2 my-0">
                            <input
                                className="form-check-input btn-outline-success"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                {t("Multiplefreelancers")}
                            </label>
                        </div>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">{t("Experiencelevel")}</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            name="entry level"
                            defaultValue
                            id="flexCheckDefault"
                            onChange={handleLevel}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("EntryLevel")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0" >
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            name="intermediate"
                            defaultValue
                            id="flexCheckDefault"
                            onChange={handleLevel}

                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Intermediate")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            name="expert"
                            defaultValue
                            id="flexCheckDefault"
                            onChange={handleLevel}

                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Expert")}
                        </label>
                    </div>
                    <hr />

                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">{t("JobType")}</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Hourly")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Fixedprice")}
                        </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">{t("NumberofProposals")}</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Lessthan5")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("5to10")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("10to15")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("15to20")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("20to50")}
                        </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">{t("ClientInfo")}</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("MyPreviousClients")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("PaymentVerified")}
                        </label>
                    </div>
                    <hr />

                    <h6 className="mb-lg-2 display-inline-block mt-lg-2 fw-bold">{t("ClientLocation")}</h6>
                    <div className="input-group rounded-3">
                        <select
                            className="form-select border border-secondary text-dark  btn-outline-light "
                            id="inputGroupSelect01"
                        >
                            <option selected>{t("SelectClientLocation")}</option>
                            <option value={1}> {t("Egypt")}</option>
                            <option value={2}> {t("USA")}</option>
                        </select>
                    </div>

                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">{t("ProjectLength")}</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Lessthan1month")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("1to3months")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("3to6months")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Morethan6months")}
                        </label>
                    </div>
                    <hr />
                    <h6 className="mb-lg-2 display-inline-block mt-lg-3 fw-bold">Hours Per Week</h6>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Lessthan30hrsweek")}
                        </label>
                    </div>
                    <div className="form-check py-2 my-0">
                        <input
                            className="form-check-input btn-outline-success"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            {t("Morethan30hrsweek")}
                        </label>
                    </div>
                </div>
                <div className="col-lg-10 col-xs-12">
                    <div>
                        <div>
                            <ul
                                id="list-homepage"
                                className="navbar navbar-expand list-group-horizontal bg-white boder border-1 my-0"
                            >
                                <li
                                    className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
                                    aria-current="true"
                                >
                                    <Link to="/Search">
                                        <a
                                            href="#"
                                            className=" list-group-item-action saved-homebage-ul-li-aa active activesidesaved bg-white"
                                            aria-current="true"
                                        >
                                            {t("SEARCH")}
                                        </a></Link>
                                </li>
                                <li
                                    className="list-group-item sidebar-homebage-ul-li bg-white boder border-0"
                                    aria-current="true"
                                >
                                    <Link to="/saved-jobs">
                                        <a
                                            href="#"
                                            className=" list-group-item-action saved-homebage-ul-li-aa bg-white"
                                            aria-current="true"
                                        >
                                            {t("SAVEDJOBS")}(2)
                                        </a></Link>
                                </li>
                            </ul>

                        </div>
                        <div className="list-group-item py-lg-4">
                            <SearchBarJobsTalent />
                        </div>
                    </div>
                    {searchData==null ?
                     <div className='col-10'>
                         <img className='mx-auto' src={searchSvg} /> 
                    </div>
                    :
                    null
                    }
                        {/* {console.log(filtered,filterSearch)} */}
                    {
                        
                        (filtered   ?filterSearch:searchData)?.map((item) => (
                        <div>
                            <div className="list-group-item">
                                <div className="row align-items-center">
                                    <div className="col-lg-9 pt-lg-2">
                                        <Link to={{
                                            pathname:
                                                `/job/${item.jobID}`,
                                            state: `${item.jobID}`
                                        }}
                                            className="job-title-link fw-bold">
                                            {item?.jobTitle}
                                        </Link>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="btn-group float-sm-end px-lg-1">
                                            <button
                                                type="button"
                                                className="btn btn-light dropdown-toggle border border-1 rounded-circle collapsed"
                                                data-toggle="collapse"
                                                data-target="#collapse"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                <i className="far fa-heart" aria-hidden="true" />
                                            </button>
                                        </div>
                                        <div className="btn-group float-sm-end  px-lg-1">
                                            <button
                                                type="button"
                                                className="btn btn-light dropdown-toggle border border-1 rounded-circle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="far fa-thumbs-down" />
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
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
                                    </div>
                                </div>
                                <p style={{ fontSize: "0.9em" }}>
                                    <span className="text-muted">
                                        <span className="fw-bold" id="contract-type">
                                            {item?.jobPaymentType}
                                        </span>
                                        <span> - </span>
                                        <span id="experience-level">{item?.jobExperienceLevel}</span>
                                        <span> - </span>
                                        <span>Est. Budget: </span>
                                        <span id="client-budget">{item?.jobBudget}</span> - posted
                <span id="posting-time"> 4 Hours ago</span>
                                    </span>
                                </p>
                                <p id="job-description">
                                    {item.jobDescription?.length > 300
                                        ? item.jobDescription?.substr(1, 300)
                                        : item.jobDescription}
                                    {item.jobDescription?.length > 300 && (
                                        <>
                                            <span id="dots">...</span>
                                            <span id="more">{item.jobDescription}</span>
                                            <span className="advanced-search-link ">more</span>
                                        </>
                                    )}
                                </p>
                                {item?.skills?.map((skill, index) =>
                                    <button
                                        key={index}
                                        type="button"
                                        className="btn btn-secondary btn-sm rounded-pill skills"
                                    >
                                        {skill}
                                    </button>

                                )}


                                <p style={{ fontSize: "0.9em" }} className="my-lg-1">
                                    <span className="text-muted">
                                        <span>Proposals: </span>
                                        <span className="fw-bold ">Less than </span>
                                        <span className="fw-bold " id="proposals-numbers">
                                            5
                </span>
                                    </span>
                                </p>
                                <p style={{ fontSize: "0.85em" }} className="my-lg-1 mb-lg-2">
                                    <span className="fw-bold" style={{ color: "#14bff4" }}>
                                        <i className="fas fa-check-circle primary me-1" />
                Payment verified
              </span>
                                    <span className="text-muted">
                                        <span className="mx-2">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </span>
                                        <span className="fw-bold "> $0 </span>
                                        <span> spent </span>
                                        <span className="fw-bold ">
                                            <i className="fas fa-map-marker-alt ms-2" /> United States
                </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))
            }
                </div>
            </div>
        </div>
    )
}