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


const Fixtures = {
    agonistiki: [
        {
            id: 1,
            header: "1η αγωνιστική",
            matches: [
                {
                    id: 1,
                    teams: "Νέα Σαλαμίνα - ΠΑΦΟΣ FC",
                    team1: NeaSalaminaCrest,
                    team2: PafosCrest,
                    date: "Παρασκευή 23/08/2019",
                    score: "1-2",
                    location: "GSP",
                    watch: "",
                    article: "Άρθρο Αγώνα"
                },
                {
                    id: 2,
                    teams: "Δόξα - Ομόνοια",
                    team1: DoxaCrest,
                    team2: OmonoiaCrest,
                    date: "Σάββατο 24/08/2019",
                    score: "0-2",
                    location: "GSP",
                    watch: "ltv",
                    article: "Άρθρο Αγώνα"
                },
                {
                    id: 3,
                    teams: "ΑΕΛ - Ανόρθωση",                    
                    team1: AelCrest,
                    team2: AnorthosiCrest,
                    date: "Κυριακή 25/08/2019",
                    score: "0-0",
                    location: "GSP",
                    watch: "ltv",
                    article: "Άρθρο Αγώνα"
                },
                {
                    id: 4,
                    teams: "ΕΝΠ - Εθνικός Άχνας",
                    team1: ParalimniCrest,
                    team2: EthnikosCrest,
                    date: "Δευτέρα 26/08/2019",
                    score: "3-4",
                    location: "GSP",
                    watch: "ltv",
                    article: "Άρθρο Αγώνα"
                },
                {
                    id: 5,
                    teams: "ΑΕΚ - Απόλλωνας",                    
                    team1: AekCrest,
                    team2: ApollonCrest,
                    date: "Παρασκευή 27/09/2019",
                    score: " - ",
                    location: "GSP",
                    watch: "ltv",
                    article: " "
                },
                {
                    id: 6,
                    teams: "ΑΠΟΕΛ - Ολυμπιακός",
                    team1: ApoelCrest,
                    team2: OlympiakosCrest,
                    date: "Τετάρτη 08/01/2020",
                    score: " - ",
                    location: "GSP",
                    watch: "ltv",
                    article: " "
                },
            ]
        },
        {
            id: 2,
            header: "2η αγωνιστική",
            matches: [
                {
                    id: 1,
                    teams: "ΠΑΦΟΣ FC - AEK",
                    team1: PafosCrest,
                    team2: AekCrest,
                    date: "Παρασκευή 30/08/2019",
                    score: "0-2",
                    location: "GSP",
                    watch: "",
                    article: "Άρθρο Αγώνα"
                },
                {
                    id: 2,
                    teams: "Ομόνοια - Νέα Σαλαμίνα",
                    team1: OmonoiaCrest,
                    team2: NeaSalaminaCrest,
                    date: "Σάββατο 31/08/2019",
                    score: "2-0",
                    location: "GSP",
                    watch: "ltv",
                    article: "Άρθρο Αγώνα"
                },
                {
                    id: 3,
                    teams: "ΑΕΛ - ΕΝΠ ",                    
                    team1: AelCrest,
                    team2: ParalimniCrest,
                    date: "Σάββατο 31/08/2019",
                    score: "2-0",
                    location: "GSP",
                    watch: "ltv",
                    article: "Άρθρο Αγώνα"
                },
                {
                    id: 4,
                    teams: "Ολυμπιακός - Δόξα",
                    team1: OlympiakosCrest,
                    team2: DoxaCrest,
                    date: "Κυριακή 01/09/2019",
                    score: "1-1",
                    location: "GSP",
                    watch: "ltv",
                    article: "Άρθρο Αγώνα"
                },
                {
                    id: 5,
                    teams: "Εθνικός Άχνας - ΑΠΟΕΛ",                    
                    team1: EthnikosCrest,
                    team2: ApoelCrest,
                    date: "Τετάρτη 15/01/2020",
                    score: " - ",
                    location: "GSP",
                    watch: "ltv",
                    article: " "
                },
                {
                    id: 6,
                    teams: "Ανόρθωση - Απόλλωνας",
                    team1: AnorthosiCrest,
                    team2: ApollonCrest,
                    date: "Τετάρτη 02/10/2019",
                    score: " - ",
                    location: "GSP",
                    watch: "ltv",
                    article: " "
                },
            ]
        },
    ]
};

export default Fixtures;
