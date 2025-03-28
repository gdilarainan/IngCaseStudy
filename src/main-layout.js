import { LitElement, html, css } from 'lit';
import './components/nav-menu.js';
import {addIcon} from "./icons/addIcon.js"
import { translations } from './i18n.js';

class MainLayout extends LitElement {

	static properties = {
		lang: { type: String }
	};

	constructor() {
		super();
		this.lang = localStorage.getItem('lang') || 'en';
	}

	static styles = css`
    :host {
      display: block;
        min-height: 100vh;
	    background: whitesmoke;
    }
    #content {
      padding: 1rem;
    }
  `;

	openAddForm = () => {
		const employeeApp = this.querySelector('employee-page');
		const app = employeeApp.shadowRoot.querySelector('employee-app');
		if (app) {
			app.openAddForm();
		} else {
			console.warn('employee-app not found');
		}
	}

	render() {
		return html`
      <nav-menu .actions=${[
          { label: translations[this.lang].addNew, event: 'add-employee' , icon: addIcon },
      ]} @add-employee=${() => this.openAddForm() }></nav-menu>
      <div id="content">
        <slot></slot>
      </div>
    `;
	}
}

customElements.define('main-layout', MainLayout);
