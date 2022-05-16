import Product from './Product';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ProductPage', () => {
	it('render one Button, a text and an image', () => {
		render(
			<Product
				detail="Cute red dress. Perfect for a summer party. Almost new. Size 36. Brand Zara. Cologne. "
				email="hallo@hallo.de"
				image="https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
				altText="dress"
			/>
		);

		const showText = screen.getByText(
			/Cute red dress. Perfect for a summer party. Almost new. Size 36. Brand Zara. Cologne./i
		);
		const showButton = screen.getByRole('button');
		const showImage = screen.getByAltText('dress');

		expect(showText).toBeInTheDocument();
		expect(showButton).toBeInTheDocument();
		expect(showImage).toBeInTheDocument();
	});
});
