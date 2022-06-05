import Product from './Product';
import UList from '../UI/Product/UList.styled';
import ProductLi from '../UI/Product/List.styled';
import useSWR from 'swr';
import Typography from '../UI/Typography';

export default function ProductGrid() {
	const { data, error } = useSWR('/api/products');
	if (error) {
		return <Typography variant="p">Error: {error.message}</Typography>;
	}
	return (
		<UList>
			{data.map(product => (
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
