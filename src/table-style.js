import { css } from 'lit';

export const tableStyles = css`
    .table-wrapper {
        overflow-x: auto;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        min-width: 600px;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
        white-space: nowrap;  
    }
    @media (max-width: 768px) {
        table th, table td {
            padding: 4px;
        }
    }
    .icon {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        transition: transform 0.1s ease;
        color: tomato;
        margin-right: 0.3rem;
    }
    .icon:hover {
        transform: scale(1.1);
    }
    .filter-input,
    .filter-date {
        width: 95%;
        box-sizing: border-box;
        padding: 4px;
        border: 1px solid #ccc;
    }
    .date-filter-row {
        display: flex;
        gap: 4px;
    }
	
    .pagination {
        margin: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
	    
    }

    .pagination button {
        cursor: pointer;
        border: 1px solid whitesmoke;
        background: whitesmoke;
        border-radius: 4px;
        color: dimgrey;
    }
	
	.pagination .next-button {
        color: tomato;
	}

    .pagination .pagination-number{
	    border-radius: 50px;
    }

    .pagination button.active {
        background: tomato;
        color: white;
	    border-radius: 100px;
    }

    .pagination button:disabled {
	    color: dimgrey;
        opacity: 0.5;
        cursor: not-allowed;
    }

    .pagination .dots {
        padding: 0 0.5rem;
        color: #777;
    }

`;
