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
	onEnableEditMode,
	isBookmarked,
}) {
	const { mutate } = useSWRConfig();
	const { asPath } = useRouter();
	const { data: session } = useSession();

	return (
		<Container variant="product">
			<ImageWrapper>
				{asPath !== '/profile' && <Bookmark active={isBookmarked} />}
				<Image src={image} alt={altText} layout="fill" objectFit="cover" />
			</ImageWrapper>
			<TextWrapper>
				<Typography variant="p">{user.name}</Typography>
				<Typography variant="p">{title}</Typography>
				<Typography variant="p">{detail}</Typography>
				{asPath !== '/profile' && (
					<DefaultButton>
						<Typography href={`mailto:${user.email}`} variant="a">
							email
						</Typography>
					</DefaultButton>
				)}
				{session && session.user.email === user.email && (
					<>
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