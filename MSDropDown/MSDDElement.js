class MSDDElement extends HTMLElement
{
    #value = "";
    #selected = false;
    #title;

    constructor(value)
    {
        super();
        this.#value = value;
        this.#title = document.createElement('p');
        this.#title.innerHTML = value;
        this.appendChild(this.#title);
    }

    toggleSelected()
    {
        this.selected = !this.selected;
    }

    getSelected()
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