import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create the employee slice
const employeeSlice = createSlice({
	name: 'employees',
		initialState: [
			{
				id: 1,
				firstName: 'Alice',
				lastName: 'Johnson',
				position: 'Senior',
				department: 'Tech',
				dateOfEmployment: '2020-06-15',
				dateOfBirth: '1990-02-20',
				phoneNumber: '+1 555-1234',
				email: 'alice@example.com'
			},
			{
				id: 2,
				firstName: 'Bob',
				lastName: 'Smith',
				position: 'Medior',
				department: 'Analytics',
				dateOfEmployment: '2021-01-10',
				dateOfBirth: '1992-09-12',
				phoneNumber: '+1 555-5678',
				email: 'bob@example.com'
			},
			{
				id: 3,
				firstName: 'Carol',
				lastName: 'Williams',
				position: 'Junior',
				department: 'Tech',
				dateOfEmployment: '2022-03-01',
				dateOfBirth: '1995-06-05',
				phoneNumber: '+1 555-8765',
				email: 'carol@example.com'
			},
			{
				id: 4,
				firstName: 'David',
				lastName: 'Lee',
				position: 'Senior',
				department: 'Analytics',
				dateOfEmployment: '2019-08-22',
				dateOfBirth: '1988-11-11',
				phoneNumber: '+1 555-2468',
				email: 'david@example.com'
			},
			{
				id: 5,
				firstName: 'Eva',
				lastName: 'Nguyen',
				position: 'Medior',
				department: 'Tech',
				dateOfEmployment: '2020-09-10',
				dateOfBirth: '1991-07-17',
				phoneNumber: '+1 555-3344',
				email: 'eva@example.com'
			},
			{
				id: 6,
				firstName: 'Frank',
				lastName: 'Brown',
				position: 'Junior',
				department: 'Analytics',
				dateOfEmployment: '2023-01-01',
				dateOfBirth: '1997-03-30',
				phoneNumber: '+1 555-6677',
				email: 'frank@example.com'
			},
			{
				id: 7,
				firstName: 'Alice',
				lastName: 'Johnson',
				position: 'Senior',
				department: 'Tech',
				dateOfEmployment: '2020-06-15',
				dateOfBirth: '1990-02-20',
				phoneNumber: '+1 555-1234',
				email: 'alice@example.com'
			},
			{
				id: 8,
				firstName: 'Bob',
				lastName: 'Smith',
				position: 'Medior',
				department: 'Analytics',
				dateOfEmployment: '2021-01-10',
				dateOfBirth: '1992-09-12',
				phoneNumber: '+1 555-5678',
				email: 'bob@example.com'
			},
			{
				id: 9,
				firstName: 'Carol',
				lastName: 'Williams',
				position: 'Junior',
				department: 'Tech',
				dateOfEmployment: '2022-03-01',
				dateOfBirth: '1995-06-05',
				phoneNumber: '+1 555-8765',
				email: 'carol@example.com'
			},
			{
				id: 10,
				firstName: 'David',
				lastName: 'Lee',
				position: 'Senior',
				department: 'Analytics',
				dateOfEmployment: '2019-08-22',
				dateOfBirth: '1988-11-11',
				phoneNumber: '+1 555-2468',
				email: 'david@example.com'
			},
			{
				id: 11,
				firstName: 'Eva',
				lastName: 'Nguyen',
				position: 'Medior',
				department: 'Tech',
				dateOfEmployment: '2020-09-10',
				dateOfBirth: '1991-07-17',
				phoneNumber: '+1 555-3344',
				email: 'eva@example.com'
			},
			{
				id: 12,
				firstName: 'Frank',
				lastName: 'Brown',
				position: 'Junior',
				department: 'Analytics',
				dateOfEmployment: '2023-01-01',
				dateOfBirth: '1997-03-30',
				phoneNumber: '+1 555-6677',
				email: 'frank@example.com'
			},
			{
				id: 13,
				firstName: 'Alice',
				lastName: 'Johnson',
				position: 'Senior',
				department: 'Tech',
				dateOfEmployment: '2020-06-15',
				dateOfBirth: '1990-02-20',
				phoneNumber: '+1 555-1234',
				email: 'alice@example.com'
			},
			{
				id: 14,
				firstName: 'Bob',
				lastName: 'Smith',
				position: 'Medior',
				department: 'Analytics',
				dateOfEmployment: '2021-01-10',
				dateOfBirth: '1992-09-12',
				phoneNumber: '+1 555-5678',
				email: 'bob@example.com'
			},
			{
				id: 15,
				firstName: 'Carol',
				lastName: 'Williams',
				position: 'Junior',
				department: 'Tech',
				dateOfEmployment: '2022-03-01',
				dateOfBirth: '1995-06-05',
				phoneNumber: '+1 555-8765',
				email: 'carol@example.com'
			},
			{
				id: 16,
				firstName: 'David',
				lastName: 'Lee',
				position: 'Senior',
				department: 'Analytics',
				dateOfEmployment: '2019-08-22',
				dateOfBirth: '1988-11-11',
				phoneNumber: '+1 555-2468',
				email: 'david@example.com'
			},
			{
				id: 17,
				firstName: 'Eva',
				lastName: 'Nguyen',
				position: 'Medior',
				department: 'Tech',
				dateOfEmployment: '2020-09-10',
				dateOfBirth: '1991-07-17',
				phoneNumber: '+1 555-3344',
				email: 'eva@example.com'
			},
			{
				id: 18,
				firstName: 'Frank',
				lastName: 'Brown',
				position: 'Junior',
				department: 'Analytics',
				dateOfEmployment: '2023-01-01',
				dateOfBirth: '1997-03-30',
				phoneNumber: '+1 555-6677',
				email: 'frank@example.com'
			},
			{
				id: 19,
				firstName: 'Alice',
				lastName: 'Johnson',
				position: 'Senior',
				department: 'Tech',
				dateOfEmployment: '2020-06-15',
				dateOfBirth: '1990-02-20',
				phoneNumber: '+1 555-1234',
				email: 'alice@example.com'
			},
			{
				id: 20,
				firstName: 'Bob',
				lastName: 'Smith',
				position: 'Medior',
				department: 'Analytics',
				dateOfEmployment: '2021-01-10',
				dateOfBirth: '1992-09-12',
				phoneNumber: '+1 555-5678',
				email: 'bob@example.com'
			},
			{
				id: 21,
				firstName: 'Carol',
				lastName: 'Williams',
				position: 'Junior',
				department: 'Tech',
				dateOfEmployment: '2022-03-01',
				dateOfBirth: '1995-06-05',
				phoneNumber: '+1 555-8765',
				email: 'carol@example.com'
			},
			{
				id: 22,
				firstName: 'David',
				lastName: 'Lee',
				position: 'Senior',
				department: 'Analytics',
				dateOfEmployment: '2019-08-22',
				dateOfBirth: '1988-11-11',
				phoneNumber: '+1 555-2468',
				email: 'david@example.com'
			},
			{
				id: 23,
				firstName: 'Eva',
				lastName: 'Nguyen',
				position: 'Medior',
				department: 'Tech',
				dateOfEmployment: '2020-09-10',
				dateOfBirth: '1991-07-17',
				phoneNumber: '+1 555-3344',
				email: 'eva@example.com'
			},
			{
				id: 24,
				firstName: 'Frank',
				lastName: 'Brown',
				position: 'Junior',
				department: 'Analytics',
				dateOfEmployment: '2023-01-01',
				dateOfBirth: '1997-03-30',
				phoneNumber: '+1 555-6677',
				email: 'frank@example.com'
			}
		]
	,
	reducers: {
		addEmployee: (state, action) => {
			state.push(action.payload);
		},
		updateEmployee: (state, action) => {
			const index = state.findIndex(emp => emp.id === action.payload.id);
			if (index !== -1) {
				state[index] = action.payload;
			}
		},
		deleteEmployee: (state, action) => {
			return state.filter(emp => emp.id !== action.payload);
		}
	}
});

export const { addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;

export const store = configureStore({
	reducer: {
		employees: employeeSlice.reducer
	}
});
