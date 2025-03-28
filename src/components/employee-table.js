import { LitElement, html, css } from 'lit';
import { editIcon } from '../icons/editIcon.js';
import { deleteIcon } from '../icons/deleteIcon.js';
import {tableStyles} from '../table-style.js';

export class EmployeeTable extends LitElement {
	static properties = {
		data: { type: Array },
		columns: { type: Array },
		onEdit: { type: Function },
		onDelete: { type: Function },

		// filters for search
		filters: { type: Object },

		// pagination properties
		currentPage: { type: Number },
		pageSize: { type: Number }
	};

	static styles = tableStyles;

	constructor() {
		super();
		this.data = [];
		this.columns = [];
		this.onEdit = () => {};
		this.onDelete = () => {};
		this.filters = {};

		// default pagination
		this.currentPage = 1;
		this.pageSize = 10;
	}

	updated(changedProps) {
		if (changedProps.has('columns')) {
			const newFilters = { ...this.filters };
			this.columns.forEach(col => {
				if (col.type === 'actions') return;

				// For date columns => { from, to }
				if (col.type === 'date') {
					newFilters[col.field] = newFilters[col.field] || { from: '', to: '' };
				} else {
					// string search
					newFilters[col.field] = newFilters[col.field] || '';
				}
			});
			this.filters = newFilters;
		}
	}

	// for date columns
	handleDateFilter(e, field, which) {
		const value = e.target.value;
		this.filters = {
			...this.filters,
			[field]: {
				...this.filters[field],
				[which]: value
			}
		};
	}

	// for string columns
	handleStringFilter(e, field) {
		const value = e.target.value;
		this.filters = {
			...this.filters,
			[field]: value
		};
	}

	// filter logic
	get filteredData() {
		if (!this.columns.length) return this.data;

		return this.data.filter(row => {
			for (const col of this.columns) {
				if (col.type === 'actions') continue;

				if (col.type === 'date') {
					const rowVal = row[col.field];
					if (!rowVal) continue;
					const rowDate = new Date(rowVal);
					if (isNaN(rowDate)) continue;

					const { from, to } = this.filters[col.field] || {};
					if (from) {
						const fromDate = new Date(from);
						if (rowDate < fromDate) return false;
					}
					if (to) {
						const toDate = new Date(to);
						if (rowDate > toDate) return false;
					}

				} else {
					const filterVal = (this.filters[col.field] || '').toLowerCase().trim();
					if (!filterVal) continue;
					const rowVal = (row[col.field] || '').toString().toLowerCase();
					if (!rowVal.includes(filterVal)) {
						return false;
					}
				}
			}
			return true;
		});
	}

	// pagination logic
	get totalPages() {
		return Math.ceil(this.filteredData.length / this.pageSize);
	}

	get paginatedData() {
		const start = (this.currentPage - 1) * this.pageSize;
		const end = start + this.pageSize;
		return this.filteredData.slice(start, end);
	}

	changePage(newPage) {
		if (newPage >= 1 && newPage <= this.totalPages) {
			this.currentPage = newPage;
		}
	}

	renderPagination() {
		const pages = [];
		const total = this.totalPages;

		if (total <= 7) {
			for (let i = 1; i <= total; i++) {
				pages.push(i);
			}
		} else {
			pages.push(1);

			if (this.currentPage > 3) pages.push('...');
			for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
				if (i > 1 && i < total) pages.push(i);
			}
			if (this.currentPage < total - 2) pages.push('...');
			pages.push(total);
		}

		return html`
      <div class="pagination">
        <button
          @click=${() => this.changePage(this.currentPage - 1)}
          ?disabled=${this.currentPage === 1}
        >
          &lt;
        </button>

        ${pages.map(p =>
			p === '...'
				? html`<span class="dots">...</span>`
				: html`
                <button
                  class=${p === this.currentPage ? 'active' : ''}
                  @click=${() => this.changePage(p)}
                >
                  ${p}
                </button>
              `
		)}

        <button
          @click=${() => this.changePage(this.currentPage + 1)}
          ?disabled=${this.currentPage === this.totalPages}
        >
          &gt;
        </button>
      </div>
    `;
	}

	render() {
		return html`
      <div class="table-wrapper">
        <table>
          <thead>
            <!-- HEADERS -->
            <tr>
              ${this.columns.map(col => html`<th>${col.label}</th>`)}
            </tr>

            <!-- FILTER ROW -->
            <tr>
              ${this.columns.map(col => {
			if (col.type === 'actions') {
				return html`<th><!-- no filter --></th>`;
			}
			if (col.type === 'date') {
				const { from = '', to = '' } = this.filters[col.field] || {};
				return html`
                    <th>
                      <div class="date-filter-row">
                        <input
                          class="filter-date"
                          type="date"
                          .value=${from}
                          @change=${e => this.handleDateFilter(e, col.field, 'from')}
                        />
                        <input
                          class="filter-date"
                          type="date"
                          .value=${to}
                          @change=${e => this.handleDateFilter(e, col.field, 'to')}
                        />
                      </div>
                    </th>
                  `;
			}
			// string filter
			return html`
                  <th>
                    <input
                      class="filter-input"
                      placeholder="Search..."
                      .value=${this.filters[col.field] || ''}
                      @input=${e => this.handleStringFilter(e, col.field)}
                    />
                  </th>
                `;
		})}
            </tr>
          </thead>

          <tbody>
            ${this.paginatedData.map(row => html`
              <tr>
                ${this.columns.map(col => {
			if (col.type === 'actions') {
				return html`
                      <td>
                        <span
                          class="icon"
                          title="Edit"
                          @click=${() => this.onEdit(row.id)}
                        >
                          ${editIcon}
                        </span>
                        <span
                          class="icon"
                          title="Delete"
                          @click=${() => this.onDelete(row.id)}
                        >
                          ${deleteIcon}
                        </span>
                      </td>
                    `;
			} else {
				const cellValue = row[col.field] || '';
				return html`<td>${cellValue}</td>`;
			}
		})}
              </tr>
            `)}
          </tbody>
        </table>
      </div>
      
      ${this.renderPagination()}
    `;
	}
}

customElements.define('employee-table', EmployeeTable);
