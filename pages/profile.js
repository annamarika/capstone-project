import { getProducts } from '../src/services/get-products';
import ProductGrid from '../src/Components/Product/ProductGrid';
import { swrFetcher } from '../src/Components/lib/swr-fetcher';
import { SWRConfig } from 'swr';
import { useSession } from 'next-auth/react';

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

export default function Products({ fallback }, user) {
	const { data: session } = useSession();
	return (
		<SWRConfig value={{ fetcher: swrFetcher, fallback }}>
			{session && session.user.email !== user.email && <ProductGrid />}
		</SWRConfig>
	);
}
