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

const ApoelData = {
    teamName: "ΑΠΟΕΛ",
    crest: ApoelCrest,
    history: "Ο ΑΠΟΕΛ ιδρύθηκε το 1926.",
}
const OmonoiaData = {
    teamName: "ΟΜΟΝΟΙΑ",
    crest: OmonoiaCrest,
    history: "Ο ΟΜΟΝΟΙΑ ιδρύθηκε το 1926.",
}



const options = [
  {
    name: "Aek",
    path: "/aek",
    imageSrc: AekCrest
  },
  {
    name: "Ael",
    path: "/ael",
    imageSrc: AelCrest
  },
  {
    name: "Anorthosi",
    path: "/anorthosi",
    imageSrc: AnorthosiCrest
  },
  {
    name: "Apoel",
    path: "/apoel",
    imageSrc: ApoelCrest,
    teamData: ApoelData
  },
  {
    name: "Apollon",
    path: "/apollon",
    imageSrc: ApollonCrest
  },
  {
    name: "Doxa",
    path: "/doxa",
    imageSrc: DoxaCrest
  },
  {
    name: "Ethnikos",
    path: "/ethnikos",
    imageSrc: EthnikosCrest
  },
  {
    name: "Nea Salamina",
    path: "/neasalamina",
    imageSrc: NeaSalaminaCrest
  },
  {
    name: "Olympiakos",
    path: "/olympiakos",
    imageSrc: OlympiakosCrest
  },
  {
    name: "Omonoia",
    path: "/omonoia",
    imageSrc: OmonoiaCrest
  },
  {
    name: "Pafos",
    path: "/pafos",
    imageSrc: PafosCrest
  },
  {
    name: "Paralimni",
    path: "/paralimni",
    imageSrc: ParalimniCrest
  },
];

export function fetchTeamData(team){
    switch (team) {
        case "apoel":
            return ApoelData;
        case "omonoia":
            return OmonoiaData;
        // case "StorytellerThumb":
        //     return StorytellerThumb;
        // case "TanabataThumb":
        //     return TanabataThumb;
        // case "ConfessionThumb":
        //     return ConfessionThumb

        default:
            return " "
    }   
}
export default options;
