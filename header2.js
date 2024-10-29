const headerTemplate2 = document.createElement('template');

headerTemplate2.innerHTML = `
  <style>
    /* Style your new header component */
    .header2 {
      font-size: 16px;
      color: #333;
      background-color: #f8f8f8;
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }
  </style>

  <div class="header2">
    <h2>Welcome to the Quran Translation</h2>
    <p>Explore translations in multiple languages</p>
  </div>
`;

class Header2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate2.content);
  }
}

customElements.define('header2-component', Header2);
