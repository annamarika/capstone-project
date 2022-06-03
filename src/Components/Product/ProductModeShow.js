import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import DefaultButton from '../UI/Button/StyledButton';
import ImageWrapper from '../UI/Image/StyledImageWrapper';
import Container from '../UI/StyledContainer';
import TextWrapper from '../UI/StyledTextWrapper';
import Typography from '../UI/Typography';

export default function ProductModeShow({
	id,
	name,
	title,
	detail,
	email,
	image,
	altText,
	onEnableEditMode,
}) {
	const { mutate } = useSWRConfig();
	const { asPath } = useRouter();

	return (
		<Container variant="product">
			<ImageWrapper>
				<Image src={image} alt={altText} layout="fill" objectFit="cover" />
			</ImageWrapper>
			<TextWrapper>
				<Typography variant="p">{name}</Typography>
				<Typography variant="p">{title}</Typography>
				<Typography variant="p">{detail}</Typography>
				{asPath !== '/profile' && (
					<DefaultButton>
						<Typography href={`mailto:${email}`} variant="a">
							email
						</Typography>
					</DefaultButton>
				)}
				{asPath !== '/products' && (
					<DefaultButton
						onClick={async () => {
							const response = await fetch('/api/product/' + id, {
								method: 'DELETE',
							});
							console.log(await response.json());
							mutate('/api/products');
						}}
					>
						delete
					</DefaultButton>
				)}
				{asPath !== '/products' && (
					<DefaultButton variant="hide" onClick={onEnableEditMode}>
						edit
					</DefaultButton>
				)}
			</TextWrapper>
		</Container>
	);
}
