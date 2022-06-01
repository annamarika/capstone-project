import { render, screen } from '@testing-library/react';

import Form from './Form';
import '@testing-library/jest-dom';

describe('Form', () => {
	it('renders 4 inputfields and a submit button', () => {
		render(<Form />);

		const imageUrlInput = screen.getByLabelText(/image upload/i);
		const titleInput = screen.getByLabelText(/title/i);
		const detailInput = screen.getByLabelText(/detail/i);
		const emailInput = screen.getByLabelText(/email/i);
		const submitButton = screen.getByRole('button', { name: /create/i });

		expect(imageUrlInput).toBeInTheDocument();
		expect(titleInput).toBeInTheDocument();
		expect(detailInput).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});
});
