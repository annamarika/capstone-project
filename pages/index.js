import { getProducts } from '../src/services/get-products';
import Product from '../src/components/Product';

export function getStaticProps() {
	const products = getProducts();

	return {
		props: {
			products,
		},
	};
}

export default function Home({ products }) {
	return (
		<>
			<h1>Product</h1>
			<Product products={products} />
		</>
	);
}
