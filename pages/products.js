import { getProducts } from '../src/services/get-products';
import ProductGrid from '../src/components/Product/ProductGrid';
import { swrFetcher } from '../src/components/lib/swr-fetcher';
import { SWRConfig } from 'swr';

export function getStaticProps() {
	const products = getProducts();

	return {
		props: {
			fallback: {
				'/api/products': products,
			},
		},
	};
}

export default function Products({ fallback }) {
	console.log(fallback);

	return (
		<SWRConfig value={{ fetcher: swrFetcher, fallback }}>
			<ProductGrid />
		</SWRConfig>
	);
}
