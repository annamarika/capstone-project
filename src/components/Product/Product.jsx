import Image from 'next/image';
import { Container, ImageWrapper, TextWrapper, ProductDetail } from './StyledProduct';
import EmailButton from '../Button/StyledButton';

export default function Product({ detail, email, image, altText }) {
	return (
		<Container>
			<ImageWrapper>
				<Image
					src={image}
					alt={altText}
					width={3456}
					height={5184}
					layout="fill"
					objectFit="cover"
				/>
			</ImageWrapper>
			<TextWrapper>
				<ProductDetail>{detail}</ProductDetail>
				<EmailButton>{email}</EmailButton>
			</TextWrapper>
		</Container>
	);
}
