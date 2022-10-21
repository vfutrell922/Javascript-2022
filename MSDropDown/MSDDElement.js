class MSDDElement extends HTMLElement
{
    #value;
    #selected;
    #title;
    #checkBox;
    
    constructor(val)
    {
        super();
        this.classList = ('drop-down-element');
        this.#value = val;
        this.#selected = false;
        this.#title = document.createElement('p');
        this.#title.innerHTML = val;
        this.#checkBox = document.createElement('input');
        this.#checkBox.type = 'checkbox'
        this.#checkBox.onclick = () => {
            this.#toggleSelected(this);
        };
        
        this.appendChild(this.#checkBox);
        this.appendChild(this.#title);
    }

    #toggleSelected()
    {
        this.#selected = !this.#selected;
        const event = new CustomEvent('toggleSelected', {detail: {value: this.#value}, bubbles: true});
        this.dispatchEvent(event);
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