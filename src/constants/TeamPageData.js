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
  amountOfArticles: 10,
  amountOfNews: 5
}

const AekData = {
  teamName: "ΑΕΚ",
  crest: AekCrest,
  history: "",
  amountOfArticles: 10,
  amountOfNews: 5
}

const AelData = {
  teamName: "ΑΕΛ",
  crest: AelCrest,
  history: "",
  amountOfArticles: 10,
  amountOfNews: 5
}

const AnorthosiData = {
  teamName: "ΑΝΟΡΘΩΣΗ",
  crest: AnorthosiCrest,
  history: "",
  amountOfArticles: 10,
  amountOfNews: 5
}

const ApollonData = {
  teamName: "ΑΠΟΛΛΩΝ",
  crest: ApollonCrest,
  history: "",
  amountOfArticles: 10,
  amountOfNews: 5
}

const DoxaData = {
  teamName: "ΔΟΞΑ",
  crest: DoxaCrest,
  history: "",
  amountOfArticles: 10,
  amountOfNews: 5
}

const EthnikosData = {
  teamName: "ΕΘΝΙΚΟΣ ΑΧΝΑΣ",
  crest: EthnikosCrest,
  history: "",
  amountOfArticles: 10,
  amountOfNews: 5
}

const NeaSalaminaData = {
  teamName: "ΝΕΑ ΣΑΛΑΜΙΝΑ",
  crest: NeaSalaminaCrest,
  history: "",
  amountOfArticles: 10,
  amountOfNews: 5
}

const OlympiakosData = {
  teamName: "ΟΛΥΜΠΙΑΚΟΣ",
  crest: OlympiakosCrest,
  history: "",
  amountOfArticles: 10,
  amountOfNews: 5
}

const PafosData = {
  teamName: "ΠΑΦΟΣ FC",
  crest: PafosCrest,
  history: "",
  amountOfArticles: 10,
  amountOfNews: 5
}

const OmonoiaData = {
  teamName: "ΟΜΟΝΟΙΑ",
  crest: OmonoiaCrest,
  history: "Η ΟΜΟΝΟΙΑ ιδρύθηκε το 2018.",
  amountOfArticles: 10,
  amountOfNews: 5
}

const ParalimniData = {
  teamName: "ΕΝΠ",
  crest: ParalimniCrest,
  history: "",
  amountOfArticles: 10,
  amountOfNews: 5
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

export function fetchTeamData(team) {
  switch (team) {
    case "apoel":
      return ApoelData;
    case "omonoia":
      return OmonoiaData;
    case "aek":
      return AekData;
    case "ael":
      return AelData;
    case "anorthosi":
      return AnorthosiData;
    case "apollon":
      return ApollonData;
    case "doxa":
      return DoxaData;
    case "ethnikos":
      return EthnikosData;
    case "neasalamina":
      return NeaSalaminaData;
    case "pafos":
      return PafosData;
    case "olympiakos":
      return OlympiakosData;
    case "paralimni":
      return ParalimniData;

    default:
      return " "
  }
}
export default options;
