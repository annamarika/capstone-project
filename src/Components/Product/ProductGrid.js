import Product from './Product';
import UList from '../UI/Product/UList.styled';
import ProductLi from '../UI/Product/List.styled';
import useSWR from 'swr';
import Typography from '../UI/Typography';
import { useRouter } from 'next/router';

export default function ProductGrid({ session }) {
	const { data, error } = useSWR('/api/products');
	const { asPath } = useRouter();
	const loginData =
		asPath === '/profile'
			? data.filter(product => product.user.email === session.user.email)
			: data;

	if (error) {
		return <Typography variant="p">Error: {error.message}</Typography>;
	}

	return (
		<UList>
			{loginData.map(product => (
				<ProductLi key={product.id}>
					<Product
						id={product.id}
						user={product.user}
						title={product.title}
						detail={product.detail}
						image={product.image}
					/>
				</ProductLi>
			))}
		</UList>
	);
}
