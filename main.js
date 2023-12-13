class MyComponent extends HTMLElement {
  // parrafo = "Hola mundo";
  // myAtribute = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // this.myAtribute = this.getAttribute("my-attribute");
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
    // const pAttribute = this.myAtribute
    //   ? `my-attribute="${this.myAtribute}"`
    //   : "";
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

  button {
    background-color: maroon;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #b30000;
    box-shadow: 0 0 10px #b30000;
  }
  
  
  </style>

<div class="container">
    <p>
  
    <button>
 Click me!
    </button>
    </p>
</div>

  
  `;

}

window.customElements.define("my-component", MyComponent);
