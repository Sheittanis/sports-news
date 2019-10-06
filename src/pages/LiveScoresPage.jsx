
import React, {useState, useEffect} from 'react'
import { Grid } from 'semantic-ui-react'
import LiveScores from "../components/LiveScores"
import LiveScoreFeed from "../components/LiveScoreFeed"
import data from "../constants/HomeArticles"
import { liveFeed } from "../constants/LiveMatches"

const LiveScoresPage = (props) => {
    const [selectedMatch, setSelection] = useState();
    const [selectedFeed, setFeed] = useState({});

    useEffect(() => {
        if (props.location.state !== undefined) {
            const matchFound = findMatchFeed(props.location.state.matchId);
            console.log(props.location.state.matchId)
            if (matchFound !== null && matchFound !== undefined)
                setFeed(matchFound);
        }
    }, [props.location.state]);

    
    useEffect(() => {
        if (selectedMatch) {
            const matchFound = findMatchFeed(selectedMatch.matchId);
            if (matchFound !== null && matchFound !== undefined)
                setFeed(matchFound);
        }
    }, [selectedMatch]);

    function findMatchFeed(matchId){
        const matchFound = liveFeed.find(function (element) {
            return element.matchId === matchId;
        });
        return matchFound
    }

    return (
        <Grid centered >
            <Grid.Row >
                <Grid.Column width={16}>
                    <LiveScores selectedMatch={setSelection}></LiveScores>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width={16}>
                    <LiveScoreFeed feed={data.articleOverview} selectedFeed={selectedFeed}></LiveScoreFeed>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default LiveScoresPage