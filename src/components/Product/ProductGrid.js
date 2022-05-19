import Product from './Product';
import UList from '../UI/StyledUList';
import ProductLi from '../UI/StyledList';

export default function ProductGrid({ products, onDeleteProduct }) {
	return (
		<UList>
			{products.map(product => (
				<ProductLi key={product.id}>
					<Product
						id={product.id}
						title={product.title}
						detail={product.detail}
						email={product.email}
						image={product.image}
						onDeleteProduct={onDeleteProduct}
					/>
				</ProductLi>
			))}
		</UList>
	);
}
