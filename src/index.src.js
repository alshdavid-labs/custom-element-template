import { text } from './eg'

class TestElement extends HTMLElement {
    constructor() {
        super();
        this._editorElm
        
    }

    connectedCallback(){
        this._editorElm = document.createElement("div")
        this._editorElm.innerHTML = text()
        this.appendChild(this._editorElm)
    }   
}

customElements.define('test-element', TestElement);

