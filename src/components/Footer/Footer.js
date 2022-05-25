import Link from 'next/link';
import FooterButton from '../UI/Footer/FooterButton';
import FooterContainer from '../UI/Footer/FooterContainer';
import FooterNav from '../UI/Footer/FooterNav';
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
				<Link passHref href="/profile">
					<FooterButton type="button" pathName={router.pathname}>
						<MySVG size="34" variant="profile" />
					</FooterButton>
				</Link>
			</FooterNav>
		</FooterContainer>
	);
}
