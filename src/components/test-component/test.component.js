import ComponentMarkup from "./test.component.html"
import ComponentStyles from "./test.component.css"



var selector = 'test-element'
export class TestElement extends HTMLElement {
    constructor() {
        super()        
    }

    connectedCallback(){
        this.innerHTML += "<div class=\"test\">teste</div>"
        this.innerHTML += "<style scoped>\n" + ComponentStyles + "\n</style>"
    }   

    func(){
        console.log("tester")
    }


}

customElements.define(selector, TestElement);