import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Saved from "../Components/ClientComponents/SavedComponent/Saved"
import MyHires from "../Components/ClientComponents/MyHiresComponent/MyHires"

export default function ClientRoutes() {
    return (
        <>
        <Router>
            <Switch>
                <Route/>
                <Route path="/ab/profiles/search/hires" exact component={MyHires}/>
                <Route path="/ab/profiles/search/saved" exact component={Saved}/>
            </Switch>
        </Router>
        </>
    )
}
