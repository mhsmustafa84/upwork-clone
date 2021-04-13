import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function ClientRoutes() {
    return (
        <>
        <Router>
            <Switch>
                <Route/>
                {/* <Route path="/saved" component={Saved}/> */}
            </Switch>
        </Router>
        </>
    )
}
