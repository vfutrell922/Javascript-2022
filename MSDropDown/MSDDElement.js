class MSDDElement extends HTMLElement
{
    #value = "";
    #selected = false;
    #title;
    #checkBox;
    #titleCheckBoxContainer;

    constructor(value)
    {
        super();
        this.#value = value;
        this.#titleCheckBoxContainer = document.createElement('div');
        this.#title = document.createElement('p');
        this.#title.innerHTML = value;
        this.#checkBox = document.createElement('input');
        this.#checkBox.type = 'checkbox'
        

        this.#titleCheckBoxContainer.appendChild(this.#title);
        this.#titleCheckBoxContainer.appendChild(this.#checkBox);
        this.appendChild(this.#titleCheckBoxContainer);
    }

    toggleSelected()
    {
        this.#selected = !this.#selected;
    }

    isSelected()
    {
        return this.#selected;
    }

    getValue()
    {
        return this.#value;
    }
}

customElements.define("multi-select-drop-down-element", MSDDElement);
export {MSDDElement};