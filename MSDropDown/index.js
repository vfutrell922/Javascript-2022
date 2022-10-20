import {MultiSelectDropDown} from './MSDD.js';

document.onload = () => {
    let animals = ["tiger", "monkey", "snake", "rat", "ram"];
    let dropDown = new MultiSelectDropDown(animals);
    document.appendChild(dropDown);
};