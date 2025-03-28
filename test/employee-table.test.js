import { describe, it, expect } from '@jest/globals';
import { fixture, html } from '@open-wc/testing';
import '../src/components/employee-table.js';

describe('EmployeeTable', () => {
	it('renders empty table with no data', async () => {
		const el = await fixture(html`<employee-table></employee-table>`);
		expect(el.data).toEqual([]);
	});
});
