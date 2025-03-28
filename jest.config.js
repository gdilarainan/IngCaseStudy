export default {
	transform: {
		'^.+\\.js$': 'babel-jest', // Use babel-jest to handle JS files
	},
	testEnvironment: 'jsdom', // For web component tests
	moduleFileExtensions: ['js', 'mjs', 'cjs'],
};
