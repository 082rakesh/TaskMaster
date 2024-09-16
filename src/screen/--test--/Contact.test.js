import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('testing contact us page', () => {
	test('should load contact us component', () => {
		render(<Contact />);
		const heading = screen.getByRole('heading');
		expect(heading).toBeInTheDocument();
	});

	test('should load submit button in the component', () => {
		render(<Contact />);
		const button = screen.getByText('Submit');
		expect(button).toBeInTheDocument();
	});

	test('should load first input text in the component', () => {
		render(<Contact />);
		const textInput = screen.getByPlaceholderText('first text input');
		expect(textInput).toBeInTheDocument();
	});

	test('should load 2 input box in the component', () => {
		render(<Contact />);
		const inputs = screen.getAllByRole('textbox');
		expect(inputs.length).toBe(2);
	});
});
