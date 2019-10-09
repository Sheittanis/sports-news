import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import FixturesPage from "../pages/FixturesPage";
import StandingsPage from "../pages/StandingsPage";
import StatsPage from "../pages/StatsPage";
import TeamPage from "../pages/TeamPage";
import ArticlePage from "../pages/ArticlePage";
import LiveScoresPage from "../pages/LiveScoresPage";
import ArchivePage from "../pages/ArchivePage"


const Routes = () => {
    return (            
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/fixtures" component={FixturesPage} />
            <Route path="/standings" component={StandingsPage} />
            <Route path="/team/:teamId" component={TeamPage} />
            <Route path="/article" component={ArticlePage} />
            <Route path="/stats" component={StatsPage} />
            <Route path="/livescores" component={LiveScoresPage} />
            <Route path="/archive" component={ArchivePage} />
            

            <Redirect to="/home" />

            <Route render={() => <Redirect to="/" />} />
        </Switch>
    );
}
export default Routes