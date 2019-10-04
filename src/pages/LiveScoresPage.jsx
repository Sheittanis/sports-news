
import React, {useState} from 'react'
import { Grid } from 'semantic-ui-react'
import LiveScores from "../components/LiveScores"
import LiveScoreFeed from "../components/LiveScoreFeed"
import data from "../constants/HomeArticles"

const LiveScoresPage = () => {
    const [selectedMatch, setSelection] = useState();

    console.log(selectedMatch)

    return (
        <Grid centered >
            <Grid.Row >
                <Grid.Column width={16}>
                    <LiveScores selectedMatch={setSelection}></LiveScores>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={16}>
                    <LiveScoreFeed feed={data.articleOverview} selectedMatch={selectedMatch}></LiveScoreFeed>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default LiveScoresPage