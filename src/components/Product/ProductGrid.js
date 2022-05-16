import Product from './Product';
import styled from 'styled-components';

export default function ProductGrid({ products }) {
	return (
		<ProductUl>
			{products.map(product => (
				<ProductLi key={product.id}>
					<Product detail={product.detail} email={product.email} image={product.image} />
				</ProductLi>
			))}
		</ProductUl>
	);
}

const ProductUl = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const ProductLi = styled.li`
	list-style: none;
`;
