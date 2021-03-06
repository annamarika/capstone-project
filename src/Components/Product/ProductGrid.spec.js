import ProductGrid from './ProductGrid';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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

describe('ProductGrid', () => {
	it('render a List of Objects', () => {
		render(
			<ProductGrid
				products={[
					{
						id: '1234',
						detail: 'Cute red dress. Perfect for a summer party. Almost new. Size 36. Brand Zara. Cologne. ',
						image: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
						altText: 'dress',
						email: 'hallo@hallo.de',
					},
					{
						id: '1235',
						detail: 'LV bag. Perfect as Clutch or Shoulderbag. brand new. Brand LV. Munich. ',
						image: 'https://images.unsplash.com/photo-1583623733237-4d5764a9dc82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
						altText: 'bag',
						email: 'hey@hallo.de',
					},
					{
						id: '1236',
						detail: 'Green velvet nike Shoes. Trendy. Worn. Size 40. Brand Nike. Berlin. ',
						image: 'https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80',
						altText: 'shoe',
						email: 'hej@hallo.de',
					},
					{
						id: '1237',
						detail: 'Golden Bracelet. Posh. granny old but still nice. Brand unknown. Hamburg. ',
						image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
						altText: 'bracelet',
						email: 'moin@hallo.de',
					},
				]}
			/>
		);

		const productArray = screen.getAllByRole('listitem');
		expect(productArray.length).toBe(4);
	});
});
