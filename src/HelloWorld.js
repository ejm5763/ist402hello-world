import { html, css, LitElement} from 'lit';

export class HelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `
    ;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      fieldNum: {type: Number},
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
    this.fieldNum = this.counter;
  }

  __increment() {
    this.counter += 1;
  }

  /*
 add decrease button that lowers counter by one, but does not go below zero and disables when hits 0
 added input field that updates with counter 
 */

  _decrease(){
    if(this.counter != 0){
      this.counter --;
    }
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <button @click=${this._decrease} ?disabled=${this.counter == 0}>decrease</button>   
      <input type="int" id = "fieldNumID" value = ${this.counter}></script>
    `;
  }
}
