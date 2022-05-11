import Image from 'next/image';
import { ProductContainer, ImageWrapper, ProductArticle, ProductDetail } from './StyledProduct';
import EmailButton from '../Button/StyledButton';

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
