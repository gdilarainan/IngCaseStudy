import { css } from 'lit';

export const employeeAppStyles = css`
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th {
        border-bottom: 1px solid #ddd;
        padding: 12px;
        text-align: left;
    }

    td {
        border-bottom: 1px solid #ddd;
        padding: 14px;
        text-align: left;
	    color: dimgrey;
    }
	
	h2, th{
		color: tomato;
	}
    .row-button {
        margin-right: 5px;
	    width: 64px;
	    height: 20px;
    }
    input {
        margin: 5px 0;
        padding: 5px;
        width: 100%;
    }
    select {
        margin-bottom: 10px;
    }

    .modal {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    .modal-content {
        background-color: #fff;
        padding: 2rem;
        border-radius: 10px;
        min-width: 300px;
        max-width: 90%;
        text-align: center;
    }

    .modal-content button {
        margin: 0 10px;
    }

`;
