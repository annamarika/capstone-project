import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import Bookmark from '../Bookmark/Bookmark';
import DefaultButton from '../UI/Button/Button.styled';
import ImageWrapper from '../UI/Image/ImageWrapper.styled';
import Container from '../UI/Product/Container.styled';
import TextWrapper from '../UI/Product/TextWrapper.styled';
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
	isBookmarked,
}) {
	const { mutate } = useSWRConfig();
	const { asPath } = useRouter();

	return (
		<Container variant="product">
			<ImageWrapper>
				{asPath !== '/profile' && <Bookmark active={isBookmarked} />}
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
				{asPath === '/profile' && (
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
				{asPath === '/profile' && (
					<DefaultButton variant="hide" onClick={onEnableEditMode}>
						edit
					</DefaultButton>
				)}
			</TextWrapper>
		</Container>
	);
}
