import {MSDDElement} from "./MSDDElement.js";

class MultiSelectDropDown extends HTMLElement
{
    selectedValuesList
    searchBar;
    elementContainer;

    constructor(values)
    {
        super(); 
        values = ["dog", "cat", "bird"]; //TODO: DELETE ME!!!
        this.selectedValuesList = new Array(); 
        this.searchBar = document.createElement("input");
        this.elementContainer = document.createElement("div");

        this.appendChild(this.searchBar);
        this.appendChild(this.elementContainer);

        this.#buildList(values);
    }

    #buildList(values)
    {
        values.forEach(element => {
            let newElement = new MSDDElement(element);
            this.elementContainer.appendChild(newElement);
        });
    }

    /**
     * Returns an array of MSDDElement.value for each selected element
     */
    getSelected()
    {
        return this.selectedValuesList;
    }

}

customElements.define("multi-select-drop-down", MultiSelectDropDown);

export {MultiSelectDropDown};