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
    #display;       // Boolean: Is the element currently displayed on the DOM.
    
    constructor(val)
    {
        super();
        this.classList = ('drop-down-element hidden');
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

    /**
     * Maintains the selected status of the elements checkbox and dispatches an
     * event to the parent to update the selected list.
     */
    #toggleSelected()
    {
        this.#selected = !this.#selected;
        const event = new CustomEvent('toggleSelected', {detail: {value: this.#value}, bubbles: true});
        this.dispatchEvent(event);
    }

    /**
     * 
     * @param {Boolean} display : Is the element to be displayed on the DOM
     * Switches the display status of the current element.
     */
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

    /**************Getters and Setters ***********************/

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