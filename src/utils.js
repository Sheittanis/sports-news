import moment from "moment";
import { useEffect } from 'react';


export function getCurrentDate() {

    var today = new Date()

    var formattedDate = moment(today).format('Do MMMM YYYY, HH:mm:ss'); // September 15th 2019, 7:14:24 pm
    return formattedDate
}

export function formatDate(date) {
    var formattedDate = moment(date).format('DD/MM/YYYY'); // September 15th 2019, 7:14:24 pm
    return formattedDate
}


export function useEffectAsync(effect, inputs) {
    useEffect(() => {
        effect();
    }, inputs);
}