import Product from './Product';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ProductPage', () => {
	it('should render one Button, a text and an image', () => {
		render(
			<Product
				products={{
					id: '1234',
					detail: 'Cute red dress. Perfect for a summer party. Almost new. Size 36. Brand Zara. Cologne. ',
					image: '/test.jpg',
					email: 'hallo@hallo.de',
				}}
			/>
		);

		const showText = screen.queryByText(
			/Cute red dress. Perfect for a summer party. Almost new. Size 36. Brand Zara. Cologne./i
		);
		const showButton = screen.getByRole('button');
		const showImage = screen.getByAltText('dress');

		expect(showText).toBeInTheDocument();
		expect(showButton).toBeInTheDocument();
		expect(showImage).toBeInTheDocument();
	});
});
