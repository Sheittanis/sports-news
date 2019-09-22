import React from "react";
import { Grid } from "semantic-ui-react";
import ScrollToTop from "../actions/ScrollToTop"

import Routes from "../components/Routes";

const Layout = () => {

    return (
        <Grid centered className="gridLayout">
            <Grid.Column>
                <ScrollToTop>
                    <Routes></Routes>
                </ScrollToTop>
            </Grid.Column>
        </Grid>
    )
}

export default Layout
