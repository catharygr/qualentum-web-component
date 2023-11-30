class MyComponent extends HTMLElement {
  parrafo = "Hola mundo";
  myAtribute = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.myAtribute = this.getAttribute("my-attribute");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = "";
    shadowRoot.appendChild(this.htmlElement().content);
  }

  htmlElement() {
    const pAttribute = this.myAtribute
      ? `my-attribute="${this.myAtribute}"`
      : "";
    const html = `
  <style>
  .container {
    display: block;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  p {
 
    color: maroon;
    font-size: 3rem;
    margin: 0 auto;

  }


  
  </style>

<div class="container">
    <p ${pAttribute}>
    <slot name="text-parrafo">"${this.parrafo}"</slot>
    <button>
    <slot name="button"></slot>
    </button>
    </p>
</div>

  
  `;
    const template = document.createElement("template");
    template.innerHTML = html;
    return template;
  }
}

window.customElements.define("my-component", MyComponent);
