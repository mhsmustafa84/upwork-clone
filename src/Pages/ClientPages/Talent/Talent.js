
import "./Talent.css";
import {
  Route,
  Switch,
  NavLink,
  useHistory,
  useLocation,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientDataAction } from "../../../Store/actions/clientData";
import MyHires from "../../../Components/ClientComponents/MyHiresComponent/MyHires";
import Saved from "../../../Components/ClientComponents/SavedComponent/Saved";
import { useTranslation } from "react-i18next";
import SearchClient from "../SearchClient/SearchClient";
import EmptyTalent from "../../../Components/ClientComponents/EmptyTalentComponent/EmptyTalent";


export default function Talent() {
  const { t } = useTranslation();
  const client = useSelector((state) => state.clientData);
  const dispatch = useDispatch();
  const [isliked, setisliked] = useState(false)
  useEffect(() => {
    dispatch(clientDataAction());
  }, []);
  useEffect(() => {
    dispatch(clientDataAction());
  }, [isliked]);

  const { pathname } = useLocation();
  const { push } = useHistory();
  pathname === "/talent" && push("/talent/my-hires");

  return (
    <div className="py-5" style={{ backgroundColor: "#f1f2f4" }}>
      <div className="container bg-white" >
        <div className="row tab-talent-CN">
          <ul className="nav nav-tabs pt-3">
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/talent/searchclient"
              >
                {t("Search")}
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/talent/my-hires"
              >
                {t("MyHires")}
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/talent/saved-talent"
              >
                {t("Saved")} ({client?.savedTalent?.length})
              </NavLink>
            </li>
          </ul>
          <Switch>
            {
              pathname === "/talent/searchclient"
              && <SearchClient />
            }
            {
              pathname === "/talent/my-hires"
              && <MyHires />
            }
            {/* {
              pathname === "/talent/saved-talent" && client?.savedTalent?.length !== 0 ?
               <Saved /> : <EmptyTalent image={<svg role="img" viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><circle cx="72.5" cy="65" fill="#1d4354" r="64.5"></circle><path d="M72.7 129.5c25.3-.1 47.1-14.7 57.7-35.9l-115.5.3c10.6 21.1 32.5 35.6 57.8 35.6z" fill="#33637a"></path><path d="M40.2 40.7h-1.9v-1.9c0-.2-.2-.4-.4-.4s-.4.2-.4.4v1.9h-1.9c-.2 0-.4.2-.4.4s.2.4.4.4h1.9v1.9c0 .2.2.4.4.4s.4-.2.4-.4v-1.9h1.9c.2 0 .4-.2.4-.4s-.2-.4-.4-.4z" fill="#ffcc0d"></path><circle cx="26.4" cy="53.2" fill="#f3756c" r="1.9"></circle><path d="M75.6 102.5H37.5c-.5 0-1-.4-1-1V50.9c0-.5.4-1 1-1h38.1c.5 0 1 .4 1 1v50.5c0 .6-.5 1.1-1 1.1z" fill="#fff"></path><path d="M63.6 89.1H49.4c-.6 0-1-.4-1-1s.4-1 1-1h14.3c.6 0 1 .4 1 1s-.5 1-1.1 1zM66.9 93.8H46.1c-.6 0-1-.4-1-1s.4-1 1-1h20.7c.6 0 1 .4 1 1s-.4 1-.9 1z" fill="#c4c4c4"></path><path d="M99.1 6.2L88.1 18l-25.2 4.2c-1.1.2-1.9.7-2.6 1.5-1.2.9-1.9 2.5-1.7 4.1.1.5.2.9.5 1.3-2.3.5-3.9 2.6-3.5 5 .3 2.4 2.6 4.1 5 3.8L73.9 36c-2 4.8-2.2 11 1.5 16.9 1.3 2.1 4.1 2.7 6.2 1.4 2.1-1.3 2.7-4.1 1.4-6.2-2.7-4.2-1.6-8.4.5-10.8l3.7-3.9c3-3.2 7.5-2.9 9.6-.9 3.1 2.9 2.8 6.9.4 10.2l-5.6 6c-1.7 1.8-1.6 4.6.2 6.3 1.8 1.7 4.6 1.6 6.3-.2l8-8.6c3.5-3.7 4.6-8.6 3.4-13l10.7-11.5c-5.8-6.5-13-11.8-21.1-15.5z" fill="#b2b2b2"></path><path d="M74.2 66.1c-4.7-2.5-7.1-8.4-4.9-13.3 2.2-4.9 8-6.8 12.7-4.3l4.4 2.3 2.2-4.7c2.2-4.9 8-6.8 12.7-4.3 4.7 2.5 6.4 8.6 4.2 13.5L95.5 77c-.1.1-.2.2-.4.1l-20.9-11z" fill="#6fda44"></path><path d="M83.5 37.3c-2.2 2.4-3.2 6.6-.5 10.8 1.3 2.1.7 4.8-1.4 6.2-2.1 1.3-4.8.7-6.2-1.4-3.7-5.9-3.5-12.1-1.5-16.9l9.6 1.3z" fill="#b2b2b2"></path><g><path d="M67 70.2c0 5.8-4.7 10.5-10.5 10.5S46 76 46 70.2s4.7-10.5 10.5-10.5S67 64.4 67 70.2" fill="#e0e0e0"></path><path d="M60.1 69.2c0 1.9-1.5 3.4-3.4 3.4s-3.4-1.5-3.4-3.4 1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4" fill="#c4c4c4"></path><path d="M56.2 74h1-.5c-.2.1-.3 0-.5 0z" fill="none"></path><path d="M59.7 73c-.7.6-1.6 1-2.6 1.1h-1c-1-.1-1.9-.5-2.6-1.1-2.1.9-3.6 2.8-4.1 5.1 1.9 1.7 4.3 2.7 7 2.7 2.8 0 5.4-1.1 7.3-3-.5-2.2-2-3.9-4-4.8z" fill="#c4c4c4"></path></g></svg>}
                  heading={t("Youhaventsavedanyoneyet")} content={t("Saveyourfavoritefreelancers")} />
            } */}
            <Route path="/talent/searchclient" exact component={SearchClient} />
            <Route path="/talent/my-hires" exact component={MyHires} />
            <Route path="/talent/saved-talent" exact>

                   
{client?.savedTalent?.length !== 0 ?
                client?.savedTalent?.map((item) => (
                  <Saved talentId={item} key={item} isliked={isliked} setisliked={setisliked} />))
                : <EmptyTalent image={<svg role="img" viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><circle cx="72.5" cy="65" fill="#1d4354" r="64.5"></circle><path d="M72.7 129.5c25.3-.1 47.1-14.7 57.7-35.9l-115.5.3c10.6 21.1 32.5 35.6 57.8 35.6z" fill="#33637a"></path><path d="M40.2 40.7h-1.9v-1.9c0-.2-.2-.4-.4-.4s-.4.2-.4.4v1.9h-1.9c-.2 0-.4.2-.4.4s.2.4.4.4h1.9v1.9c0 .2.2.4.4.4s.4-.2.4-.4v-1.9h1.9c.2 0 .4-.2.4-.4s-.2-.4-.4-.4z" fill="#ffcc0d"></path><circle cx="26.4" cy="53.2" fill="#f3756c" r="1.9"></circle><path d="M75.6 102.5H37.5c-.5 0-1-.4-1-1V50.9c0-.5.4-1 1-1h38.1c.5 0 1 .4 1 1v50.5c0 .6-.5 1.1-1 1.1z" fill="#fff"></path><path d="M63.6 89.1H49.4c-.6 0-1-.4-1-1s.4-1 1-1h14.3c.6 0 1 .4 1 1s-.5 1-1.1 1zM66.9 93.8H46.1c-.6 0-1-.4-1-1s.4-1 1-1h20.7c.6 0 1 .4 1 1s-.4 1-.9 1z" fill="#c4c4c4"></path><path d="M99.1 6.2L88.1 18l-25.2 4.2c-1.1.2-1.9.7-2.6 1.5-1.2.9-1.9 2.5-1.7 4.1.1.5.2.9.5 1.3-2.3.5-3.9 2.6-3.5 5 .3 2.4 2.6 4.1 5 3.8L73.9 36c-2 4.8-2.2 11 1.5 16.9 1.3 2.1 4.1 2.7 6.2 1.4 2.1-1.3 2.7-4.1 1.4-6.2-2.7-4.2-1.6-8.4.5-10.8l3.7-3.9c3-3.2 7.5-2.9 9.6-.9 3.1 2.9 2.8 6.9.4 10.2l-5.6 6c-1.7 1.8-1.6 4.6.2 6.3 1.8 1.7 4.6 1.6 6.3-.2l8-8.6c3.5-3.7 4.6-8.6 3.4-13l10.7-11.5c-5.8-6.5-13-11.8-21.1-15.5z" fill="#b2b2b2"></path><path d="M74.2 66.1c-4.7-2.5-7.1-8.4-4.9-13.3 2.2-4.9 8-6.8 12.7-4.3l4.4 2.3 2.2-4.7c2.2-4.9 8-6.8 12.7-4.3 4.7 2.5 6.4 8.6 4.2 13.5L95.5 77c-.1.1-.2.2-.4.1l-20.9-11z" fill="#6fda44"></path><path d="M83.5 37.3c-2.2 2.4-3.2 6.6-.5 10.8 1.3 2.1.7 4.8-1.4 6.2-2.1 1.3-4.8.7-6.2-1.4-3.7-5.9-3.5-12.1-1.5-16.9l9.6 1.3z" fill="#b2b2b2"></path><g><path d="M67 70.2c0 5.8-4.7 10.5-10.5 10.5S46 76 46 70.2s4.7-10.5 10.5-10.5S67 64.4 67 70.2" fill="#e0e0e0"></path><path d="M60.1 69.2c0 1.9-1.5 3.4-3.4 3.4s-3.4-1.5-3.4-3.4 1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4" fill="#c4c4c4"></path><path d="M56.2 74h1-.5c-.2.1-.3 0-.5 0z" fill="none"></path><path d="M59.7 73c-.7.6-1.6 1-2.6 1.1h-1c-1-.1-1.9-.5-2.6-1.1-2.1.9-3.6 2.8-4.1 5.1 1.9 1.7 4.3 2.7 7 2.7 2.8 0 5.4-1.1 7.3-3-.5-2.2-2-3.9-4-4.8z" fill="#c4c4c4"></path></g></svg>}
                  heading={t("Youhaventsavedanyoneyet")} content={t("Saveyourfavoritefreelancers")} />
                }
            
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
