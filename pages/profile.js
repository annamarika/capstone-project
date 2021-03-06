import { getProducts } from '../src/services/get-products';
import ProductGrid from '../src/Components/Product/ProductGrid';
import { swrFetcher } from '../src/Components/lib/swr-fetcher';
import { SWRConfig } from 'swr';
import { useSession } from 'next-auth/react';
import Profile from '../src/Components/Profile/Profile';

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
	const { data: session } = useSession();
	return (
		<SWRConfig value={{ fetcher: swrFetcher, fallback }}>
			<Profile />
			{session && <ProductGrid session={session} />}
		</SWRConfig>
	);
}
