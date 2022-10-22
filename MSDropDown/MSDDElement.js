/**
 * Author: Vincent Futrell
 * Date-Last-Modified: 10-21-2022
 * 
 * A single, selectable element of the MSDD. 
 */
class MSDDElement extends HTMLElement
{
    #value;         // String:  value displayed to the user
    #selected;      // Boolean: Has the user checked the box of this element
    #title;         // HTML Element: <p> which displays #value to the user
    #checkBox;      // HTML Element: <input>
    #display;       // Boolean: Whether or not to display this element on the DOM.
    
    constructor(val)
    {
        super();
        this.classList = ('drop-down-element displayed');
        this.#display = false;
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

    display(display)
    {
        if (display)
        {
            this.classList.replace('hidden', 'displayed');
            this.#display = true;
        }
        else
        {
            this.classList.replace('displayed', 'hidden');
            this.#display = false;
        }
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