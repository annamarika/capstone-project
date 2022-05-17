import { getProducts } from '../src/services/get-products';
import ProductGrid from '../src/components/Product/ProductGrid';
import Form from '../src/components/Form/Form';

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
			<Form />
			<ProductGrid products={products} />{' '}
		</>
	);
}
