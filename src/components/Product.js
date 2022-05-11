import Image from 'next/image';
import styled from 'styled-components';

export default function Product({ products }) {
	return (
		<ProductContainer>
			<Image src="/test.jpg" alt="dress" width={3456} height={5184} />
			<article>
				<p>{products.detail}</p>
				<address>
					<p>{products.email}</p>
				</address>
			</article>
		</ProductContainer>
	);
}

const ProductContainer = styled.div`
	background-color: blue;
	width: 384px;
	height: 436;
	padding: 20px 0 20px 20px;
	display: flex;
	gap: 13px;

	Image {
		width: 186;
	}
`;
