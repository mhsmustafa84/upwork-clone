import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import MyHires from "../../../Components/ClientComponents/MyHiresComponent/MyHires"
import Saved from "../../../Components/ClientComponents/SavedComponent/Saved"


export default function Talent() {
    return (
        <div>
            <div className="container">
            <Router>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/ab/profiles/search/" >Search</Link>
                        {/* <a className="nav-link active" aria-current="page" href="#">Active</a> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ab/profiles/search/hires" >My Hires</Link>
                        {/* <a className="nav-link" href="#">Link</a> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ab/profiles/search/saved" >Saved</Link>
                        {/* <a className="nav-link" href="#">Link</a> */}
                    </li>
                </ul>
           
                <Switch>
                    <Route path="/ab/profiles/search/hires" exact component={MyHires} />
                    <Route path="/ab/profiles/search/saved" exact component={Saved} />
                </Switch>
            </Router>
            </div>
        </div>
    )
}
