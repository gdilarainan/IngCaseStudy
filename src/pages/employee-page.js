import { LitElement, html } from 'lit';
import '../employee-app.js';

class EmployeePage extends LitElement {
	render() {
		return html`<employee-app id="employeeApp"></employee-app>`;
	}
}

customElements.define('employee-page', EmployeePage);
