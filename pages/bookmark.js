import { getProducts } from '../src/services/get-products';
import { swrFetcher } from '../src/Components/lib/swr-fetcher';
import { SWRConfig } from 'swr';
import ProductGridBookmark from '../src/Components/Product/ProductGirdBookmark';

export async function getStaticProps() {
	const products = await getProducts();

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
			<ProductGridBookmark />
		</SWRConfig>
	);
}
