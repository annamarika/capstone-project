import React from 'react';
import Product from './Product';

export default {
	title: 'Components/Product',
	component: Product,
	decorators: [
		Story => {
			return (
				<div style={{ padding: '3em', maxWidth: '400px', position: 'relative' }}>
					<Story />
				</div>
			);
		},
	],
};

const props = {
	products: {
		detail: 'Cute red dress. Perfect for a summer party. Almost new. Size 36. Brand Zara. Cologne. ',
		email: 'hallo@hallo.de',
	},
};

export function OneProduct() {
	return <Product {...props} />;
}
