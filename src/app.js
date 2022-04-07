import { LightningElement } from "lwc";

export default class App extends LightningElement {
    show = false;
    handleChange(event){
        this.show = event.target.checked;
    }
}
