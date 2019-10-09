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

const standings = [
    {
        name: "ΑΕΚ",
        path: "/aek",
        imageSrc: AekCrest,
        matches: 3,
        wins: 1,
        draws: 2,
        losses: 0,
        goalsfor: 6,
        goalsAgainst: 4,
        points: 5,
        form: ['W', 'L'],
        upcoming: PafosCrest
    },
    {
        name: "ΑΕΛ",
        path: "/ael",
        imageSrc: AelCrest,
        matches: 4,
        wins: 2,
        draws: 1,
        losses: 1,
        goalsfor: 3,
        goalsAgainst: 3,
        points: 7,
        form: ['W', 'L'],
        upcoming: ParalimniCrest
    },
    {
        name: "ΑΝΟΡΘΩΣΗ",
        path: "/anorthosi",
        imageSrc: AnorthosiCrest,
        matches: 2,
        wins: 1,
        draws: 1,
        losses: 0,
        goalsfor: 2,
        goalsAgainst: 1,
        points: 4,
        form: ['W', 'L'],
        upcoming: ApollonCrest
    },
    {
        name: "ΑΠΟΕΛ",
        path: "/apoel",
        imageSrc: ApoelCrest,
        matches: 1,
        wins: 1,
        draws: 0,
        losses: 0,
        goalsfor: 3,
        goalsAgainst: 0,
        points: 3,
        form: ['W'],
        upcoming: EthnikosCrest
    },
    {
        name: "ΑΠΟΛΛΩΝ",
        path: "/apollon",
        imageSrc: ApollonCrest,
        matches: 2,
        wins: 1,
        draws: 0,
        losses: 1,
        goalsfor: 3,
        goalsAgainst: 3,
        points: 3,
        form: ['W', 'L'],
        upcoming: AnorthosiCrest
    },
    {
        name: "ΔΟΞΑ",
        path: "/doxa",
        imageSrc: DoxaCrest,
        matches: 4,
        wins: 0,
        draws: 2,
        losses: 1,
        goalsfor: 2,
        goalsAgainst: 5,
        points: 2,
        form: ['W', 'L'],
        upcoming: OlympiakosCrest
    },
    {
        name: "ΕΘΝΙΚΟΣ ΑΧΝΑΣ",
        path: "/ethnikos",
        imageSrc: EthnikosCrest,
        matches: 2,
        wins: 1,
        draws: 1,
        losses: 0,
        goalsfor: 5,
        goalsAgainst: 4,
        points: 4,
        form: ['W', 'L'],
        upcoming: ApoelCrest
    },
    {
        name: "ΝΕΑ ΣΑΛΑΜΙΝΑ",
        path: "/neasalamina",
        imageSrc: NeaSalaminaCrest,
        matches: 3,
        wins: 1,
        draws: 0,
        losses:2,
        goalsfor: 4,
        goalsAgainst:6,
        points: 3,
        form: ['W', 'L'],
        upcoming: OmonoiaCrest
    },
    {
        name: "ΟΛΥΜΠΙΑΚΟΣ",
        path: "/olympiakos",
        imageSrc: OlympiakosCrest,
        matches: 3,
        wins: 0,
        draws: 2,
        losses: 1,
        goalsfor: 5,
        goalsAgainst: 6,
        points: 2,
        form: ['W', 'L'],
        upcoming: DoxaCrest
    },
    {
        name: "ΟΜΟΝΟΙΑ",
        path: "/omonoia",
        imageSrc: OmonoiaCrest,
        matches: 4,
        wins: 3,
        draws: 1,
        losses: 0,
        goalsfor: 7,
        goalsAgainst: 2,
        points: 10,
        form: ['W', 'L'],
        upcoming: NeaSalaminaCrest
    },
    {
        name: "ΠΑΦΟΣ",
        path: "/pafos",
        imageSrc: PafosCrest,
        matches: 3,
        wins: 1,
        draws: 0,
        losses:2,
        goalsfor: 4,
        goalsAgainst: 6,
        points: 3,
        form: ['W', 'L'],
        upcoming: AekCrest
    },
    {
        name: "ΕΝΠ",
        path: "/paralimni",
        imageSrc: ParalimniCrest,
        matches:3,
        wins: 0,
        draws: 0,
        losses: 3,
        goalsfor: 4,
        goalsAgainst: 8,
        points: 0,
        form: ['W', 'L'],
        upcoming: AelCrest
    },
];

export default standings;

