import Image from 'next/image';
import Typography from '../UI/Typography';
import Container from '../UI/StyledContainer';
import ImageWrapper from '../UI/StyledImageWrapper';
import TextWrapper from '../UI/StyledTextWrapper';
import DefaultButton from '../UI/StyledButton';

export default function Product({ title, detail, email, image, altText }) {
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
				<Typography variant="p">{title}</Typography>
				<Typography variant="p">{detail}</Typography>
				<DefaultButton>{email}</DefaultButton>
			</TextWrapper>
		</Container>
	);
}
