import { getProducts } from '../src/services/get-products';
import Product from '../src/components/Product/Product';
import styled from 'styled-components';

export function getStaticProps() {
	const products = getProducts();

	return {
		props: {
			products,
		},
	};
}

export default function Home({ products }) {
	return (
		<PageContainer>
			<Product products={products} />
		</PageContainer>
	);
}

const PageContainer = styled.ul`
	margin: 22px;
	display: flex;
	flex-wrap: wrap;
	justify-items: center;
	align-items: center;
`;
