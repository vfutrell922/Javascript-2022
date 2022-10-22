/**
 * Author: Vincent Futrell
 * Date-last-modified: 10/22/2022
 * This is a multi-select dropdown list. Accepts an array of string values to build the list options.
 * User may obtain a list of selected values by calling getSelectedValues().
 * 
 * TODO: Add preselection functionality - 10/22/2022
 */
import {MSDDElement} from "./MSDDElement.js";

class MultiSelectDropDown extends HTMLElement
{
    #values                     // User provided list of values to 
    #selectedValuesList;        // Subset of values 
    #searchBar;                 // HTML input element accpeting search input for the values list
    #elementContainer;          // HTML div that acts as parent to all MSDDElements

    constructor(values)
    {
        super();

        values = ["dog", "cat", "bird"]; //TODO: TEST DATA, DELETE ME!!!

        this.#selectedValuesList = [];
        this.#searchBar = document.createElement("input");
        this.#searchBar.onkeyup = () => {
            this.#searchBarFilter(this);
        };
        this.#elementContainer = document.createElement("div");

        this.id = 'DropDown'
        this.classList = ('drop-down');
        this.addEventListener('toggleSelected', (e) => {
            this.#updateSelectedList(e);
        });

        this.appendChild(this.#searchBar);
        this.appendChild(this.#elementContainer);

        this.#buildList(values);
    }

    /**
     * 
     * @param {*} values : Array of String values.
     * Generates an MSDDElement for each value in the provided array, 
     */
    #buildList(values)
    {
        values.forEach(element => {
            let newElement = new MSDDElement(String(element));
            this.#elementContainer.appendChild(newElement);
        });
    }

    /**
     * 
     * @param {*} e : Event dispatched by the selected MSDDElement
     * Updates the SelectedValuesList upon each click of an element.
     * If the value is not selected, it will be added to the list. 
     * If the value is selected, it will be removed from the list. 
     */
    #updateSelectedList(e)
    {
        let value = e.detail.value;
        if(this.#selectedValuesList.includes(value))
        {
            let index = this.#selectedValuesList.indexOf(value);
            this.#selectedValuesList.splice(index, 1);
        }
        else
        {
            this.#selectedValuesList.push(value);
        }
    }

    /**
     * Displays all elements whose value contains the searchPhrase;
     * hides all elements whose values do not.
     */
    #searchBarFilter()
    {
        let searchPhrase = this.#searchBar.value;
        let elements = this.#elementContainer.children;
        let elementCount = elements.length;
        for(let i = 0; i < elementCount; i++)
        {
            let currentElement = elements[i];
            if(currentElement.innerHTML.includes(searchPhrase)) currentElement.display(true);
            else currentElement.display(false);
        }
    }

    /**
     * Returns a subset of values, containing all elements selected by the user.
     */
    getSelectedValues()
    {
        return this.#selectedValuesList;
    }

}


customElements.define("multi-select-drop-down", MultiSelectDropDown);

export {MultiSelectDropDown};