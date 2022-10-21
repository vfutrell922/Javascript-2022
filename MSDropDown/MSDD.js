import {MSDDElement} from "./MSDDElement.js";

class MultiSelectDropDown extends HTMLElement
{
    #selectedValuesList;
    #searchBar;
    #elementContainer;

    constructor(values)
    {
        super(); 
        values = ["dog", "cat", "bird"]; //TODO: DELETE ME!!!
        this.#selectedValuesList = [];
        this.id = 'DropDown'
        this.classList = ('drop-down');
        this.addEventListener('toggleSelected', (e) => {
            this.updateSelectedList(e);
        });

        this.#searchBar = document.createElement("input");
        this.#elementContainer = document.createElement("div");

        this.appendChild(this.#searchBar);
        this.appendChild(this.#elementContainer);

        this.#buildList(values);
    }

    #buildList(values)
    {
        values.forEach(element => {
            let newElement = new MSDDElement(element);
            this.#elementContainer.appendChild(newElement);
        });
    }

    updateSelectedList(e)
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

    console.log(this.#selectedValuesList);
}

    /**
     * Returns an array of MSDDElement.value for each selected element
     */
    getSelectedValues()
    {
        return this.#selectedValuesList;
    }

}


customElements.define("multi-select-drop-down", MultiSelectDropDown);

export {MultiSelectDropDown};