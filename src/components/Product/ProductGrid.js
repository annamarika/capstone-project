import Product from './Product';
import UList from '../UI/StyledUList';
import ProductLi from '../UI/StyledList';

export default function ProductGrid({ products }) {
	return (
		<UList>
			{products.map(product => (
				<ProductLi key={product.id}>
					<Product detail={product.detail} email={product.email} image={product.image} />
				</ProductLi>
			))}
		</UList>
	);
}
