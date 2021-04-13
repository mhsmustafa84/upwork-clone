import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jobs from "../Pages/ClientPages/Jobs/Jobs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import messages from "../Pages/ClientPages/Messages/Messages";
export default function ClientRoutes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Jobs} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/messages" exact component={messages} />
      </Switch>
    </>
  );
}
