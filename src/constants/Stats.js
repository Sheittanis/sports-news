import ApoelCrest from "../images/crests/apoel.png";
import ApollonCrest from "../images/crests/apollon.png";
import OlympiakosCrest from "../images/crests/olympiakos.png";
import OmonoiaCrest from "../images/crests/omonoia.png";

const ApoelData = {
  teamName: "ΑΠΟΕΛ",
  teamCrest: ApoelCrest,
  firstStat: 7,
  firstStatLabel: "Trophy Streak",
  iconName: "trophy",
  averagePossession: 66
}

const ApollonData = {
  teamName: "ΑΠΟΛΛΩΝ",
  teamCrest: ApollonCrest,
  firstStat: 3,
  firstStatLabel: "Avg Goals per game",
  iconName: "soccer",
  averagePossession: 63
}

const OlympiakosData = {
  teamName: "ΟΛΥΜΠΙΑΚΟΣ",
  teamCrest: OlympiakosCrest,
  firstStat: 12,
  firstStatLabel: "Yellow Cards",
  iconName: "square yellow",
  averagePossession: 33
}

const OmonoiaData = {
  teamName: "ΟΜΟΝΟΙΑ",
  teamCrest: OmonoiaCrest,
  firstStat: 10,
  firstStatLabel: "Clean Sheets",
  iconName: "shield",
  averagePossession: 50
}


const PlayerOne = {
    name: "Player",
    lastName: "One",
    number: "#77",
    teamName: "ΑΠΟΕΛ",
    teamCrest: ApoelCrest,
    firstStat: 10,
    firstStatLabel: "Goals",
    secondStat: 3,
    secondStatLabel: "Assists"
}


const PlayerTwo = {
    name: "Player",
    lastName: "Two",
    number: "#1",
    teamName: "ΟΜΟΝΟΙΑ",
    teamCrest: OmonoiaCrest,
    firstStat: 2,
    firstStatLabel: "Goals",
    secondStat: 1,
    secondStatLabel: "Assists"
}



export const playerStats = [PlayerOne, PlayerTwo]
export const teamStats = [ApoelData, ApollonData, OlympiakosData, OmonoiaData]



export const dropdownOptions = [
  {
    key: 1,
    text: 'Player Stats',
    value: 'playerStats',
  },
  {
    key: 2,
    text: 'Team Stats',
    value: 'teamStats'
  }
];

