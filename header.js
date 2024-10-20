const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
      position: sticky;
      top: 0px;
      background-color: white;
	  z-index: 99;
    }
	
	.home {
		width: 60px;
		height: 25px;
		position: fixed;
		top: 40px;
		right: -28px;
		transform: rotate(90deg);
		z-index: 9;
		font-size: 10px;
		color: grey;
		background-color: #f9f9f9;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		text-decoration: none;
		text-align: center;
		padding: 20px 0 0 0;
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

  <!--
  <header>
    <a href="index.html" class="home">T o p i c s</a>
  </header>
  -->
  
  <div class="ct">
  <select onchange="location = this.value;">
    <option value="">Select Page</option>
    <option value="index.html">1</option>
    <option value="002.html">2</option>
	<option value="003.html">3</option>
	<option value="004.html">4</option>
  </select>
  </div>

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