import { LitElement, html } from 'lit';
import {employeeAppStyles} from './employee-styles.js';
import { getTranslations } from './i18n.js';
import { store, addEmployee, updateEmployee, deleteEmployee } from './store.js';
import './components/employee-table.js';

class EmployeeApp extends LitElement {
	static properties = {
		employees: { type: Array },
		newEmployee: { type: Object },
		language: { type: String },
		translations: { type: Object },
		showAddPopup: { type: Boolean },
		showDeletePopup: { type: Boolean },
		selectedEmployeeId: { type: Number }
	};

	static styles = employeeAppStyles;

	constructor() {
		super();
		this.language = localStorage.getItem('lang') || 'en';
		this.translations = getTranslations(this.language);
		this.employees = store.getState().employees;
		this.unsubscribe = store.subscribe(() => {
			this.employees = store.getState().employees;
			this.requestUpdate();
		});

		this.newEmployee = this.emptyEmployee();
		this.showAddPopup = false;
		this.showDeletePopup = false;
		this.selectedEmployeeId = null;
	}

	emptyEmployee() {
		return {
			id: '',
			firstName: '',
			lastName: '',
			position: '',
			department: '',
			dateOfEmployment: '',
			dateOfBirth: '',
			phoneNumber: '',
			email: ''
		};
	}

	handleInput(e, field) {
		this.newEmployee = { ...this.newEmployee, [field]: e.target.value };
	}

	openAddForm() {
		this.newEmployee = this.emptyEmployee();
		this.showAddPopup = true;
	}

	editEmployee(id) {
		const emp = this.employees.find(e => e.id === id);
		if (emp) {
			this.newEmployee = { ...emp };
			this.showAddPopup = true;
		}
	}

	saveEmployee() {
		if (this.newEmployee.id) {
			// Edit flow
			store.dispatch(updateEmployee(this.newEmployee));
		} else {
			// Add flow
			store.dispatch(addEmployee({
				...this.newEmployee,
				id: Date.now()
			}));
		}
		this.showAddPopup = false;
		this.newEmployee = this.emptyEmployee();
	}

	askDeleteEmployee(id) {
		this.selectedEmployeeId = id;
		this.showDeletePopup = true;
	}

	confirmDelete() {
		store.dispatch(deleteEmployee(this.selectedEmployeeId));
		this.selectedEmployeeId = null;
		this.showDeletePopup = false;
	}

	cancelDelete() {
		this.selectedEmployeeId = null;
		this.showDeletePopup = false;
	}

	renderPopup() {
		const t = this.translations;
		if (!this.showAddPopup) return null;

		return html`
      <div class="modal">
        <div class="modal-content">
          <h3>${this.newEmployee.id ? t.editEmployee : t.addEmployee}</h3>
          <input placeholder="${t.firstName}" .value=${this.newEmployee.firstName} @input=${e => this.handleInput(e, 'firstName')} />
          <input placeholder="${t.lastName}" .value=${this.newEmployee.lastName} @input=${e => this.handleInput(e, 'lastName')} />
          <select @change=${e => this.handleInput(e, 'department')} .value=${this.newEmployee.department}>
            <option value="">${t.department}</option>
            <option value="Analytics">Analytics</option>
            <option value="Tech">Tech</option>
          </select>
          <select @change=${e => this.handleInput(e, 'position')} .value=${this.newEmployee.position}>
            <option value="">${t.position}</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
          </select>
          <input type="date" .value=${this.newEmployee.dateOfEmployment} @input=${e => this.handleInput(e, 'dateOfEmployment')} />
          <input type="date" .value=${this.newEmployee.dateOfBirth} @input=${e => this.handleInput(e, 'dateOfBirth')} />
          <input type="tel" placeholder="${t.phoneNumber}" .value=${this.newEmployee.phoneNumber} @input=${e => this.handleInput(e, 'phoneNumber')} />
          <input type="email" placeholder="${t.email}" .value=${this.newEmployee.email} @input=${e => this.handleInput(e, 'email')} />

          <button class="row-button" @click=${this.saveEmployee}>
            ${this.newEmployee.id ? t.update : t.add}
          </button>
          <button class="row-button" @click=${() => (this.showAddPopup = false)}>
            ${t.cancel}
          </button>
        </div>
      </div>
    `;
	}

	renderDeletePopup() {
		const t = this.translations;
		if (!this.showDeletePopup) return null;

		return html`
      <div class="modal">
        <div class="modal-content">
          <p>${t.confirmDelete}</p>
          <button @click=${this.confirmDelete}>${t.delete}</button>
          <button @click=${this.cancelDelete}>${t.cancel}</button>
        </div>
      </div>
    `;
	}

	render() {
		const t = this.translations;
		const columns = [
			{ field: 'firstName',        label: t.firstName,        type: 'string' },
			{ field: 'lastName',         label: t.lastName,         type: 'string' },
			{ field: 'position',         label: t.position,         type: 'string' },
			{ field: 'department',       label: t.department,       type: 'string' },
			{ field: 'dateOfEmployment', label: t.dateOfEmployment, type: 'date' },
			{ field: 'dateOfBirth',      label: t.dateOfBirth,      type: 'date' },
			{ field: 'phoneNumber',      label: t.phoneNumber,      type: 'string' },
			{ field: 'email',            label: t.email,            type: 'string' },
			{ field: 'actions',          label: t.actions,          type: 'actions' }
		];

		return html`
      <div>
        <h2>${t.title}</h2>
        <employee-table
          .data=${this.employees}
          .columns=${columns}
          .onEdit=${(id) => this.editEmployee(id)}
          .onDelete=${(id) => this.askDeleteEmployee(id)}
        >
        </employee-table>
        ${this.renderPopup()}
        ${this.renderDeletePopup()}
      </div>
    `;
	}
}

customElements.define('employee-app', EmployeeApp);
