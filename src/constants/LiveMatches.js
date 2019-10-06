import AekCrest from "../images/crests/aek.png";
import AelCrest from "../images/crests/ael.png"
import AnorthosiCrest from "../images/crests/anorthosi.png";
import ApoelCrest from "../images/crests/apoel.png";
import ApollonCrest from "../images/crests/apollon.png";
import DoxaCrest from "../images/crests/doxa.png";
import EthnikosCrest from "../images/crests/ethnikos.png";
import NeaSalaminaCrest from "../images/crests/nea-salamina.png";
import OlympiakosCrest from "../images/crests/olympiakos.png";
import OmonoiaCrest from "../images/crests/omonoia.png";
import PafosCrest from "../images/crests/pafos.png";
import ParalimniCrest from "../images/crests/paralimni.png";


export const liveMatches = [
    {
        matchId: 1,
        teams: "Νέα Σαλαμίνα - ΠΑΦΟΣ FC",
        team1: NeaSalaminaCrest,
        team2: PafosCrest,
        team1goals: 1,
        team2goals: 2,
        status: "FT"
    },
    {
        matchId: 2,
        teams: "Δόξα - Ομόνοια",
        team1: DoxaCrest,
        team2: OmonoiaCrest,
        team1goals: 0,
        team2goals: 2,
        status: "80' - LIVE"
    },
    {
        matchId: 3,
        teams: "ΑΕΛ - Ανόρθωση",
        team1: AelCrest,
        team2: AnorthosiCrest,
        team1goals: 0,
        team2goals: 0,
        status: "20:00"
    },
    {
        matchId: 4,
        teams: "ΕΝΠ - Εθνικός Άχνας",
        team1: ParalimniCrest,
        team2: EthnikosCrest,
        team1goals: 3,
        team2goals: 4,
        status: "FT"
    },
    {
        matchId: 5,
        teams: "ΑΕΚ - Απόλλωνας",
        team1: AekCrest,
        team2: ApollonCrest,
        team1goals: 0,
        team2goals: 0,
        status: "0'"
    },
    {
        matchId: 6,
        teams: "ΑΠΟΕΛ - Ολυμπιακός",
        team1: ApoelCrest,
        team2: OlympiakosCrest,
        team1goals: 0,
        team2goals: 0,
        status: "33' - LIVE"
    }
]


export const liveFeed = [
    {
        matchId: 1,
        teams: "Νέα Σαλαμίνα - ΠΑΦΟΣ FC",
        team1: NeaSalaminaCrest,
        team2: PafosCrest,
        team1goals: 1,
        team2goals: 2,
        status: "Full Time",
        feed: [
            {
                minute: "0'",
                matchEvent: "Random feed below :)",
                type: "feed"
            },
            {
                minute: "12'",
                matchEvent: "Goal by player #1! 1-0.",
                type: "soccer"
            },
            {
                minute: "32'",
                matchEvent: "Yellow for a horrific challenge by player #2",
                type: "square yellow"
            },
            {
                minute: "45'",
                matchEvent: "Half-time. 1-0.",
                type: "stopwatch"
            },
            {
                minute: "57'",
                matchEvent: "OFF THE CROSSBAR!",
                type: "feed"
            },
            {
                minute: "63'",
                matchEvent: "Player #2 is off with a second yellow!",
                type: "square red"
            },
            {
                minute: "64'",
                matchEvent: "Player #5 is coming on. Player #4 is coming off!",
                type: "arrow right green"
            },
            {
                minute: "80'",
                matchEvent: "An equalizer by player #3! 1-1. Could they win this?",
                type: "soccer"
            },
            {
                minute: "90+3'",
                matchEvent: "GOOAAAAAAL!!! 1-2!",
                type: "soccer"
            }
        ]
    },
    {
        matchId: 2,
        teams: "Δόξα - Ομόνοια",
        team1: DoxaCrest,
        team2: OmonoiaCrest,
        team1goals: 0,
        team2goals: 2,
        status: "80' - LIVE",
        feed: [
            {
                minute: "0'",
                matchEvent: "Random feed below :)",
                type: "feed"
            },
        ]
    },
    {
        matchId: 3,
        teams: "ΑΕΛ - Ανόρθωση",
        team1: AelCrest,
        team2: AnorthosiCrest,
        team1goals: 0,
        team2goals: 0,
        status: "20:00",
        feed: [
            {
                minute: "0'",
                matchEvent: "Random feed below :)",
                type: "feed"
            },
            {
                minute: "0'",
                matchEvent: "Game starts at 20:00",
                type: "feed"
            },
        ]
    },
    {
        matchId: 4,
        teams: "ΕΝΠ - Εθνικός Άχνας",
        team1: ParalimniCrest,
        team2: EthnikosCrest,
        team1goals: 3,
        team2goals: 4,
        status: "Full Time",
        feed: [
            {
                minute: "0'",
                matchEvent: "Random feed below :)",
                type: "feed"
            },
        ]
    },
    {
        matchId: 5,
        teams: "ΑΕΚ - Απόλλωνας",
        team1: AekCrest,
        team2: ApollonCrest,
        team1goals: 0,
        team2goals: 0,
        status: "0'",
        feed: [
            {
                minute: "0'",
                matchEvent: "Random feed below :)",
                type: "feed"
            },
        ]
    },
    {
        matchId: 6,
        teams: "ΑΠΟΕΛ - Ολυμπιακός",
        team1: ApoelCrest,
        team2: OlympiakosCrest,
        team1goals: 0,
        team2goals: 0,
        status: "33' - LIVE",
        feed: [
            {
                minute: "0'",
                matchEvent: "Random feed below :)",
                type: "feed"
            },
        ]
    }
]
