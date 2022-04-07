import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api
  label = "";

  connectedCallback(){
    console.log("in child's connectedCallback");
  }

  disconnectedCallback(){
    console.log("in child's disconnectedCallback");
  }
}
