import Image from 'next/image';
import styled from 'styled-components';

export default function Product({ products }) {
	return (
		<ProductContainer>
			<ImageWrapper>
				<Image
					src="/test.jpg"
					alt="dress"
					width={3456}
					height={5184}
					layout="fill"
					objectFit="cover"
				/>
			</ImageWrapper>
			<ProductArticle>
				<ProductDetail>{products.detail}</ProductDetail>
				<EmailButton>
					<p>{products.email}</p>
				</EmailButton>
			</ProductArticle>
		</ProductContainer>
	);
}

const ProductContainer = styled.div`
	background-color: white;
	max-width: 384px;
	max-height: 436px;
	padding: 20px 0 20px 20px;
	display: flex;

	border-radius: 50px;
`;

const ImageWrapper = styled.div`
	background: blue;
	width: 200%;
	height: 386px;
	position: relative;
	object-fit: cover;
	border-radius: 50px;
	overflow: hidden;
	border: 3px solid #4b587f;
`;

const ProductArticle = styled.div`
	margin: 13px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductDetail = styled.p`
	color: #4b587f;
	text-transform: uppercase;
	padding-bottom: 10px;
	border-bottom: solid 3px #db6c4c;
`;

const EmailButton = styled.button`
	text-transform: uppercase;
	color: white;
	background-color: #db6c4c;
	border-radius: 19px;
	border: none;
	display: flex;
	justify-content: center;
	padding: 7px 13px;
`;
