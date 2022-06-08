import Product from './Product';
import UList from '../UI/Product/UList.styled';
import ProductLi from '../UI/Product/List.styled';
import useSWR from 'swr';
import Typography from '../UI/Typography';
import { useRouter } from 'next/router';

export default function ProductGridBookmark() {
	const { data, error } = useSWR('/api/products');
	const { asPath } = useRouter();
	const bookmarkData =
		asPath === '/bookmark' ? data.filter(product => product.bookmark === true) : '';

	if (error) {
		return <Typography variant="p">Error: {error.message}</Typography>;
	}

	return (
		<UList>
			{bookmarkData.map(product => (
				<ProductLi key={product.id}>
					<Product
						id={product.id}
						user={product.user}
						title={product.title}
						detail={product.detail}
						image={product.image}
						bookmark={product.bookmark}
					/>
				</ProductLi>
			))}
		</UList>
	);
}
