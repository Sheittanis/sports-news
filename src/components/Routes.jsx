import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FixturesPage from "../pages/FixturesPage";
import StandingsPage from "../pages/StandingsPage";
import TeamPage from "../pages/TeamPage";
import ArticlePage from "../pages/ArticlePage";



const Routes = () => {
    return (            
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/fixtures" component={FixturesPage} />
            <Route path="/standings" component={StandingsPage} />
            <Route path="/team/:teamId" component={TeamPage} />
            <Route path="/article" component={ArticlePage} />
            

            <Redirect to="/home" />

            <Route render={() => <Redirect to="/" />} />
        </Switch>
    );
}
export default Routes