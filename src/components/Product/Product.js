import Image from 'next/image';
import { Container, ImageWrapper, Article, ProductDetail } from './StyledProduct';
import EmailButton from '../Button/StyledButton';

export default function Product({ products }) {
	return (
		<Container>
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
			<Article>
				<ProductDetail>{products.detail}</ProductDetail>
				<EmailButton>
					<p>{products.email}</p>
				</EmailButton>
			</Article>
		</Container>
	);
}
