import { getProducts } from '../src/services/get-products';
import ProductGrid from '../src/Components/Product/ProductGrid';
import { swrFetcher } from '../src/Components/lib/swr-fetcher';
import { SWRConfig } from 'swr';

export async function getStaticProps() {
	const products = await getProducts();
	/*const allProducts = JSON.stringify(products);*/

	return {
		props: {
			fallback: {
				'/api/products': products,
			},
		},
	};
}

export default function Products({ fallback }) {
	return (
		<SWRConfig value={{ fetcher: swrFetcher, fallback }}>
			<ProductGrid />
		</SWRConfig>
	);
}
