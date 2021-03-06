import Link from 'next/link';
import FooterButton from '../UI/Footer/FooterButton.styled';
import FooterContainer from '../UI/Footer/FooterContainer.styled';
import FooterNav from '../UI/Footer/FooterNav.styled';
import { useRouter } from 'next/router';

import MySVG from '../UI/MySVG';

export default function Footer() {
	const router = useRouter();

	return (
		<FooterContainer>
			<FooterNav>
				<Link passHref href="/products">
					<FooterButton type="button" pathName={router.pathname}>
						<MySVG size="34" variant="products" />
					</FooterButton>
				</Link>
				<Link passHref href="/create">
					<FooterButton type="button" pathName={router.pathname}>
						<MySVG size="34" variant="add" />
					</FooterButton>
				</Link>
				<Link passHref href="/bookmark">
					<FooterButton pathName={router.pathname}>
						<MySVG size="24" variant="bookmark" />
					</FooterButton>
				</Link>
			</FooterNav>
		</FooterContainer>
	);
}
