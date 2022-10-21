class MSDDElement extends HTMLElement
{
    value = "";
    selected = false;
    #title;
    #checkBox;

    constructor(value)
    {
        super();
        this.classList = ('drop-down-element');
        this.value = value;
        this.#title = document.createElement('p');
        this.#title.innerHTML = value;
        this.#checkBox = document.createElement('input');
        this.#checkBox.type = 'checkbox'
        this.#checkBox.onclick = this.toggleSelected;
        
        this.appendChild(this.#checkBox);
        this.appendChild(this.#title);
    }

    toggleSelected()
    {
        this.selected = !this.selected;
    }

    isSelected()
    {
        return this.selected;
    }

    getValue()
    {
        return this.value;
    }
}

customElements.define("multi-select-drop-down-element", MSDDElement);
export {MSDDElement};