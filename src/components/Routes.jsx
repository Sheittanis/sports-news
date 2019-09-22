import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const Routes = () => {
    return (            
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />

            <Redirect to="/home" />

            <Route render={() => <Redirect to="/" />} />
        </Switch>
    );
}
export default Routes