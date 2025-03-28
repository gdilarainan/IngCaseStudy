// add-icon.js
import {html} from 'lit';
import {EmployeeTable} from "../components/employee-table.js"

export const addIcon = html`
    <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            style="width: 14px; height: 14px;"
    >
        <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
        />
    </svg>
`;

