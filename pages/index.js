import { getProducts } from '../src/services/get-products';
import ProductGrid from '../src/components/Product/ProductGrid';

export function getStaticProps() {
	const products = getProducts();

	return {
		props: {
			products,
		},
	};
}

export default function Home({ products }) {
	return <ProductGrid products={products} />;
}
