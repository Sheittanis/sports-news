
import moment from "moment";

export function getCurrentDate() {

    var today = new Date()

    var formattedDate = moment(today).format('Do MMMM YYYY, HH:mm:ss'); // September 15th 2019, 7:14:24 pm
    return formattedDate
}