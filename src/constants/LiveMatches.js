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


const LiveMatches = [
    {
        teams: "Νέα Σαλαμίνα - ΠΑΦΟΣ FC",
        team1: NeaSalaminaCrest,
        team2: PafosCrest,
        team1goals: 1,
        team2goals: 2,
        status: "FT"
    },
    {
        teams: "Δόξα - Ομόνοια",
        team1: DoxaCrest,
        team2: OmonoiaCrest,
        team1goals: 0,
        team2goals: 2,
        status: "80' - LIVE"
    },
    {
        teams: "ΑΕΛ - Ανόρθωση",
        team1: AelCrest,
        team2: AnorthosiCrest,
        team1goals: 0,
        team2goals: 0,
        status: "20:00"
    },
    {
        teams: "ΕΝΠ - Εθνικός Άχνας",
        team1: ParalimniCrest,
        team2: EthnikosCrest,
        team1goals: 3,
        team2goals: 4,
        status: "FT"
    },
    {
        teams: "ΑΕΚ - Απόλλωνας",
        team1: AekCrest,
        team2: ApollonCrest,
        team1goals: 0,
        team2goals: 0,
        status: "0'"
    },
    {
        teams: "ΑΠΟΕΛ - Ολυμπιακός",
        team1: ApoelCrest,
        team2: OlympiakosCrest,
        team1goals: 0,
        team2goals: 0,
        status: "33' - LIVE"
    }
]


export default LiveMatches;
