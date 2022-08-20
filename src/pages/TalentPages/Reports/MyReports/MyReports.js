/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



export default function Reports() {

  const { t } = useTranslation();

  // const [local, setLoc] = useState({});

  // let lang = useSelector(state => state.lang);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(langAction(lang));
  //   lang === "ar" ? setLoc(language.ar) : setLoc(language.en)
  // }, [lang]);

  return (
    <div className="MyReports">
      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-8">
              <div className="mt-20 d-md-none" />
              <h1
                className="ms-2 mb-2 mt-4"
                style={{
                  lineHeight: "27px",
                  fontSize: "21px",
                  fontWeight: "700",
                }}
              >
                {t("myReports")}
              </h1>
            </div>
          </div>
        </div>

        <div className="container" style={{ backgroundColor: "white" }}>
          <div className="row" style={{ paddingLeft: "20px" }}>
            <h3
              className="mb-10 mt-4 fw-bold"
              style={{ lineHeight: "24px", fontSize: "17px", fontWeight: 700 }}
            >
              <Link
                to="/weeklysummary"
                style={{ textDecoration: "none", color: "#38a000" }}
              >
                {t("weekSummary")}
              </Link>
            </h3>
          </div>
          <div className="row d-flex flex-row" style={{ paddingLeft: "20px" }}>
            <div className="col-md-6">
              <p className="mb-0">
                <i className="far fa-calendar-check me-2" />
                <span>{t("currentWeek")}</span>
              </p>
            </div>
            <div className="col-md-6 text-end">
              <button className="btn btn-default ">
                <i className="fas fa-file-csv" />
              </button>
            </div>
          </div>
          <div className=" row border-top mt-4" style={{ paddingLeft: "20px" }}>
            <h3
              className="mb-10 mt-4 text-muted"
              style={{ lineHeight: "24px", fontSize: "17px", fontWeight: 700 }}
            >
              <i className="fas fa-lock me-2" />
              <a
                className="text-muted"
                link
                href="#"
                style={{ textDecoration: "none", color: "black" }}
              >
                {t("WeeklySummaryByClient")}
              </a>
            </h3>
          </div>
          <div className="row d-flex flex-row" style={{ paddingLeft: "20px" }}>
            <div className="col-md-6">
              <p className="mb-0 text-muted">
                <i className="far fa-calendar-check me-2" />
                <span>{t("currentWeek")}</span>
              </p>
            </div>
            <div className="col-md-6 text-end text-muted">
              <button
                className="btn btn-default btn-circle text-muted"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="fas fa-file-csv" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="staticBackdropLabel">
                Freelancer Plus
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="up-sell-media">
                <div className="up-illustration up-sell-image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 145 130"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M4.7 49.6l-1.7.6-.6-1.8c-.1-.2-.3-.3-.5-.2-.2.1-.3.3-.2.5l.6 1.8-1.8.6c-.2.1-.3.3-.2.5.1.2.3.3.5.2l1.8-.6.5 1.8c.1.2.3.3.5.2.2-.1.3-.3.2-.5L3.2 51l1.8-.7c.2-.1.3-.3.2-.5 0-.2-.2-.3-.5-.2m112.8-29.7l1.1 1.2-1.2 1.1c-.1.1-.1.3 0 .5.1.1.3.1.5 0l1.2-1.1 1.1 1.2c.1.1.3.1.5 0 .1-.1.1-.3 0-.5l-1.1-1.2 1.2-1.1c.1-.1.1-.3 0-.5-.1-.1-.3-.1-.5 0l-1.2 1.1-1.1-1.2c-.1-.1-.3-.1-.5 0-.1.1-.1.3 0 .5"
                      fill="#ffcc0d"
                    />
                    <path
                      d="M38.7 22c.2.6-.1 1.4-.8 1.6-.6.2-1.4-.1-1.6-.8-.2-.6.1-1.4.8-1.6.6-.2 1.3.1 1.6.8"
                      fill="#f3756c"
                    />
                    <path
                      d="M139.4 31.5c.5-.5 1.4-.5 1.9.1s.5 1.4-.1 1.9c-.5.5-1.4.5-1.9-.1-.5-.5-.5-1.4.1-1.9"
                      fill="#73e6ff"
                    />
                    <path
                      d="M71.2 91.8l-40.1 7.1c-.4.1-.8-.2-.9-.6l-10.7-61c-.1-.4.2-.8.6-.9l40.1-7.1c.4-.1.8.2.9.6l10.7 60.9c.1.5-.2.9-.6 1"
                      fill="#33637a"
                    />
                    <path
                      d="M55.6 50.7c.3 1.4.2 2.9 0 4.2 0 .1-.2 0-.2.1-.9 4.7-4.7 8.6-9.7 9.5-1.3.2-2.7.2-3.9 0-.1 0 0 .1-.1.1-4.9-.8-8.9-4.6-9.8-9.8-1.2-6.6 3.2-12.8 9.8-14 6.5-1.1 12.7 3.3 13.9 9.9"
                      fill="#f9f9f9"
                    />
                    <defs>
                      <path
                        id="a"
                        d="M55.6 50.7c1.2 6.6-3.2 12.8-9.8 14-6.6 1.2-12.8-3.2-14-9.8-1.2-6.6 3.2-12.8 9.8-14 6.6-1.2 12.8 3.2 14 9.8"
                      />
                    </defs>
                    <clipPath id="b">
                      <use xlinkHref="#a" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#b)">
                      <path
                        d="M47.2 61.1c3.9-1.1 5.5-4.6 5.5-4.6l-4.4-2.9s-.4-.2-.2-.7c0 0 .7-.7.5-1.4-.4-1-1.1-.9-1.3-.9-.2 0-.5-.2-.6-.3-.2-.1-.4-.3-.7-.4h-.1c-.8-.2-1.4-.5-2.2-.8-.6-.3-1.3-.4-2-.3-1.3.3-2.5-.5-2.5 2.3 0 .9-.1 1.8-.1 1.8s-.2 1.2-.2 2 .9.5.9.5c.7-.1.9.9 1.1 1.4.3.5.2 1.6 2.7 1l3.6 3.3z"
                        fill="#b2b2b2"
                      />
                      <path
                        d="M36.5 47.6c0 .2 0 .4.1.6.2.7.7 1.3 1.3 1.5 2.2.7 4.5-2.4 6.3.3.9 1.3 1 1.9 1.1 2.1l1-.2c-.1-.7.5-1.1.9-1.2.6-.1 1 .1 1.3.9.1-.1.8-1 .6-2.3-.2-1.4-1.2-1.7-1.9-1.9-.7-.2-.6-.5-.6-.9 0-.5 0-2.1-1.8-2.4-.9-.2-1.7.1-2.6.4-1.3.6-2.8.4-4.1.9-.9.3-1.7 1.1-1.6 2.2m39.2 30.1c-.5-1.8-2.4-8.2-5.2-12.5l3.4-.6c-5.8-12-19.1-10.3-22.8-9.6-.3.6-.9 1.9-2.3 3.1-.2.2-.5.4-.7.5l-.1.1c-.1 0-.1.1-.2.1-.6.4-1.3.7-2.1.9-5.9 4.3-4.8 10.6-4.8 10.6l6.7-1.2L52 81.8l23.7-4.1z"
                        fill="#1d4354"
                      />
                      <path
                        d="M46.1 79.2l-6.7 1.2-.8-4.3 3.4-.6c.3-.1.5-.4.5-.7l-.8-4.5 5.8-1 1.6 4.9c.8 2.2-.6 4.6-3 5"
                        fill="#b2b2b2"
                      />
                      <path
                        d="M46.1 79.1c0 .1 0 .1 0 0 0 .1 0 0 0 0zm26.7-14.2L66.3 66l.6 3.4c.1.4-.2.8-.6.9l-13 3.4s-3.4 0-5.5 1.9c0 0-2.2 2.2-1.9 3.6l4.5-.8 3.3-1.2c4.3-.5 9.2-.3 15.9-1.5 6.8-1.3 3.2-10.8 3.2-10.8z"
                        fill="#b2b2b2"
                      />
                    </g>
                    <rect
                      x="35.9"
                      y="79.6"
                      transform="rotate(-10.003 49.144 83.671)"
                      width="26.5"
                      height={8}
                      fill="#6fda44"
                    />
                    <path
                      d="M117.6 98.8l-40.1-7.1c-.4-.1-.7-.5-.6-.9L87.7 30c.1-.4.5-.7.9-.6l40.1 7.1c.4.1.7.5.6.9l-10.7 60.9c-.2.3-.6.6-1 .5"
                      fill="#33637a"
                    />
                    <path
                      d="M117 54.9c-1 5.4-5.4 9.4-10.7 9.9-.1 0 0-.1-.1-.1h-.3c-.9.1-1.9 0-2.8-.2-2.9-.5-5.3-2-7-4-2.3-2.6-3.5-6.1-2.8-9.8 1.2-6.6 7.4-10.9 14-9.8 6.4 1.2 10.8 7.4 9.7 14"
                      fill="#f9f9f9"
                    />
                    <defs>
                      <path
                        id="c"
                        d="M117 54.9c-1.2 6.6-7.4 10.9-14 9.8-6.6-1.2-10.9-7.4-9.8-14 1.2-6.6 7.4-10.9 14-9.8 6.5 1.2 10.9 7.4 9.8 14"
                      />
                    </defs>
                    <clipPath id="d">
                      <use xlinkHref="#c" overflow="visible" />
                    </clipPath>
                    <path
                      d="M110.7 53s0-1 .1-2c.4-2.4-1.3-4.8-3.7-5.2-2.4-.4-4.8 1.2-5.3 3.6h-.8c-.3.1-.6.2-.8.4-.2.2-.3.4-.4.7v.6c.1.2.2.4.3.5.1.1.1.2.2.3.1.2-.2.6-.3.8l-5.7 5.9s2.2 3.7 6.5 5.5l4-6.1c2.7 1 2.8-.2 3.2-.8.4-.6.7-1.7 1.5-1.5 0 0 1 .5 1.1-.4.2-.9.1-2.3.1-2.3"
                      clipPath="url(#d)"
                      fill="#e0e0e0"
                    />
                    <path
                      d="M102.3 51v-.2c.1-.7-.3-1.3-1-1.4-.4-.1-.7.1-1 .3-.1 0-.1.1-.1.1l2.3-5.8c.2-.5.7-.7 1.2-.6l7.2 1.9c.5.1.9.7.7 1.2l-.8 2.6-3.5-1c-.4-.1-.8 0-1.1.3l-2.1 2.3c-.3.3-.7.4-1.1.3h-.7z"
                      clipPath="url(#d)"
                      fill="#1d4354"
                    />
                    <path
                      d="M101.3 47l-1.1 2.8c0-.1.1-.1.1-.1.3-.3.7-.4 1.2-.3.6.2.9.8.8 1.4v.2l1.4.4 2.5-2.8-4.9-1.6z"
                      clipPath="url(#d)"
                      fill="#33637a"
                    />
                    <path
                      d="M72.9 75.9L91 57.2s4.2-4.6 9.1-.2c2.9 2.6 12.3 16.5 12.3 16.5l-7.9 5.5-4-5.7-6.7 6.7-20.9-4.1z"
                      clipPath="url(#d)"
                      fill="#1d4354"
                    />
                    <rect
                      x="95.6"
                      y="70.4"
                      transform="rotate(-80.003 99.629 83.661)"
                      width={8}
                      height="26.5"
                      fill="#6fda44"
                    />
                    <path
                      d="M97.7 89.3H51.1c-.5 0-.9-.4-.9-.9V17.6c0-.5.4-.9.9-.9h46.6c.5 0 .9.4.9.9v70.8c0 .5-.4.9-.9.9"
                      fill="#1d4354"
                    />
                    <path
                      d="M88.2 39.8c0 3.1-1 6-2.8 8.3h-.1c-2.5 3.3-6.5 5.4-10.9 5.4-4.5 0-8.5-2.1-11-5.4 0 0-.1.1-.1 0-1.7-2.3-2.7-5.2-2.7-8.3 0-7.6 6.2-13.8 13.8-13.8 7.6 0 13.8 6.2 13.8 13.8"
                      fill="#f9f9f9"
                    />
                    <path
                      d="M76.8 47.5c-2.1-.5-3.5-2.5-5-4.2-1.9-2.2-3.6-5.4-3.2-8.5 0-.3.1-.6.2-.9.8-2.5 3.3-4.2 6-4.1 0 0 3.3.2 5.1 3.6 1.8 3.3 1.1 6.5 2.8 9.2 2 2.7 0 6.3-5.9 4.9"
                      fill="#6fda44"
                    />
                    <path
                      d="M70.9 45.2c-.1.6-.5 1.1-1.1 1.2-1.5.4-3 .8-4.1 1.1l17.3.1-4.6-1.1c-.7-.2-1.2-.8-1.3-1.5l-.3-1c-.1-.6.1-1.1.5-1.5.9-.8 1.6-2.1 1.9-3.4-1-.5-1.9-1.2-2.6-2.2-3.1-4.5-4.6-4.6-5.9-3.9-.2.1-.4.3-.6.6 0 0 0 .1-.1.1l-.1.1c-.1.1-.2.3-.3.4-.3.5-.5 1-.6 1.5-.2.6-.3 1.3-.3 2 0 1.9.7 3.6 1.9 4.8.4.4.6 1 .5 1.6l-.2 1.1z"
                      fill="#b2b2b2"
                    />
                    <path
                      d="M74.2 47.2c1.5 0 2.9-.3 4.2-.8l7 1.7c-2.5 3.4-6.4 5.5-11.1 5.5-4.5 0-8.5-2.2-11-5.5 0 0 3.2-.9 6.5-1.7h.2c0-.1 1.2.8 4.2.8"
                      fill="#33637a"
                    />
                    <rect
                      x="59.2"
                      y="71.1"
                      width="30.4"
                      height="9.2"
                      fill="#6fda44"
                    />
                    <path
                      d="M62 61.3l.6-1.6.5 1.6h1.6l-1.2 1.1.4 1.6-1.3-.9-1.3.9.4-1.6-1.2-1 1.5-.1c0 .1 0 .1 0 0m5.9 0l.6-1.6.5 1.6h1.6l-1.2 1.1.4 1.6-1.3-.9-1.3.9.4-1.6-1.2-1 1.5-.1c0 .1 0 .1 0 0m6 0l.6-1.6.5 1.6h1.6l-1.2 1.1.4 1.6-1.3-.9-1.3.9.4-1.6-1.2-1 1.5-.1c0 .1 0 .1 0 0m5.9 0l.6-1.6.5 1.6h1.6l-1.2 1.1.4 1.6-1.3-.9-1.3.9.4-1.6-1.2-1 1.5-.1c0 .1 0 .1 0 0m6 0l.6-1.6.5 1.6h1.6l-1.2 1.1.4 1.6-1.3-.9-1.3.9.4-1.6-1.2-1 1.5-.1c0 .1 0 .1 0 0"
                      fill="#fff"
                    />
                    <path
                      d="M59.7 75.3H22.5c-.4 0-.7.3-.7.7v36.6c0 .4.3.7.7.7h38v-38h-.8z"
                      fill="#e0e0e0"
                    />
                    <path
                      d="M126.6 75.3H60.4v38h66.2c.4 0 .7-.3.7-.7V76c0-.4-.3-.7-.7-.7z"
                      fill="#c4c4c4"
                    />
                    <path
                      d="M42.6 94.8h-38c-.4 0-.5-.2-.2-.5l17.5-18.9h38.6L42.6 94.8z"
                      fill="#f9f9f9"
                    />
                    <path
                      d="M144.7 94.3c.3.3.2.5-.2.5H78.4l-18-19.5h66.8l17.5 19z"
                      fill="#f9f9f9"
                    />
                  </svg>
                </div>
              </div>
              <div className="up-sell-heading">
                <h2>Upgrade to Freelancer Plus to access this feature</h2>
              </div>
              <div>
                <span>
                  Freelancer Plus supports this feature as well as many other
                  perks.
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <div className="container">
                <div className="col-md-12 text-center">
                  <button
                    type="button"
                    className="btn btn-secondary text-center"
                    data-bs-dismiss="modal"
                    style={{ backgroundColor: "#5bbc2e" }}
                  >
                    Upgrade
                  </button>
                  <button
                    type="button"
                    className=" btn btn-link text-center"
                    style={{ color: "#5bbc2e", textDecoration: "none" }}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
