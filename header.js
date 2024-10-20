const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
	
	.home {
		position: fixed;
		top: 20%;
		left: -35px;
		transform: rotate(90deg);
		z-index: 9;
		font-size: 10px;
		color: #555;
		background-color: white;
		border: 1px solid lightgrey;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		text-decoration: none;
		text-align: center;
		padding-left: 10px;
		padding-right: 10px;
		padding-bottom: 10px;
	}
	
	.home:active {
		background-color: black;
		color: white;
	}

	.ct {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
	}
	
	select {
		border: 1px solid lightgrey;
		border-radius: 4px;
		font-family: opendyslexic-reg;
		font-size: 10px;
		color: #555;
		outline: none; /* Removes the default outline when clicked */
	}

	select:focus {
		outline: none; /* Ensures no outline appears on focus */
	}
  </style>

<!------------------------------------------------------------------>

  <a href="list.html" class="home">C h a p t e r s</a>

  
  <div class="ct">
  <select onchange="location = this.value;">
    <option value="">Select Page</option>
    <option value="index.html">1</option>
    <option value="002.html">2</option>
	<option value="003.html">3</option>
	<option value="004.html">4</option>
	<option value="005.html">5</option>
  </select>
  </div>

<!------------------------------------------------------------------>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);