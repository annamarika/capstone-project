import ProductGrid from './ProductGrid';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ProductGrid', () => {
	it('render one Button, a text and an image', () => {
		render(
			<ProductGrid
				products={[
					{
						id: '1234',
						detail: 'Cute red dress. Perfect for a summer party. Almost new. Size 36. Brand Zara. Cologne. ',
						email: 'hallo@hallo.de',
						image: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
					},
				]}
			/>
		);

		const showText = screen.getByText(
			/Cute red dress. Perfect for a summer party. Almost new. Size 36. Brand Zara. Cologne./i
		);
		const showButton = screen.getByRole('button');

		expect(showText).toBeInTheDocument();
		expect(showButton).toBeInTheDocument();
	});
});
