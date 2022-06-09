import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import Bookmark from '../Bookmark/Bookmark';
import DefaultButton from '../UI/Button/Button.styled';
import ImageWrapper from '../UI/Image/ImageWrapper.styled';
import Container from '../UI/Product/Container.styled';
import TextWrapper from '../UI/Product/TextWrapper.styled';
import Typography from '../UI/Typography';
import { useSession } from 'next-auth/react';

export default function ProductModeShow({
	id,
	title,
	detail,
	image,
	altText,
	user,
	bookmark,
	onEnableEditMode,
}) {
	const { mutate } = useSWRConfig();
	const { asPath } = useRouter();
	const { data: session } = useSession();

	return (
		<Container variant="product">
			<ImageWrapper>
				{asPath !== '/profile' && <Bookmark active={bookmark} id={id} />}
				<Image src={image} alt={altText} layout="fill" objectFit="cover" />
			</ImageWrapper>
			<TextWrapper>
				{asPath !== '/profile' && <Typography variant="username">{user.name}</Typography>}
				<Typography variant="p">{title}</Typography>
				<Typography variant="p">{detail}</Typography>
				{asPath !== '/profile' && session && (
					<DefaultButton>
						<Typography href={`mailto:${user.email}`} variant="a">
							email
						</Typography>
					</DefaultButton>
				)}
				{asPath === '/profile' && (
					<>
						<DefaultButton
							onClick={async () => {
								try {
									const response = await fetch('/api/product/' + id, {
										method: 'DELETE',
									});
									const data = await response.json();
									mutate('/api/products');
									return data;
								} catch (error) {
									console.error(`Ooops we had an error: ${error}`);
								}
							}}
						>
							delete
						</DefaultButton>{' '}
						<DefaultButton variant="hide" onClick={onEnableEditMode}>
							edit
						</DefaultButton>
					</>
				)}
			</TextWrapper>
		</Container>
	);
}
