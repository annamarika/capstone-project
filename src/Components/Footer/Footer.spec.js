import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

jest.mock('next/router', () => ({
	useRouter() {
		return {
			route: '/',
			pathname: '',
			query: '',
			asPath: '',
		};
	},
}));

describe('Footer', () => {
	it('renders three Buttons', () => {
		render(<Footer />);

		const navButton = screen.getAllByRole('button');

		expect(navButton.length).toBe(3);
	});
});
