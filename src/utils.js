import moment from "moment";
import { useEffect } from 'react';


export function getCurrentDate() {

    var today = new Date()

    var formattedDate = moment(today).format('Do MMMM YYYY, HH:mm:ss'); // September 15th 2019, 7:14:24 pm
    return formattedDate
}

export function loremIpsum(strLength) {
    var loremIpsumGen = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    return loremIpsumGen.substring(0, strLength);
}

export function useEffectAsync(effect, inputs) {
    useEffect(() => {
        effect();
    }, inputs);
}