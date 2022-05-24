import Link from 'next/link';
import styled from 'styled-components';
import MySVG from '../UI/MySVG';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterNav>
				<Link passHref href="/products">
					<button type="button">
						<SvgContainer>
							<MySVG size="34" variant="products" />
						</SvgContainer>
					</button>
				</Link>
				<Link passHref href="/create">
					<button type="button">
						<SvgContainer>
							<MySVG size="34" variant="add" />
						</SvgContainer>
					</button>
				</Link>
				<Link passHref href="/profile">
					<button type="button">
						<SvgContainer>
							<MySVG size="34" variant="profile" />
						</SvgContainer>
					</button>
				</Link>
				<Link passHref href="/">
					<button type="button">start</button>
				</Link>
			</FooterNav>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	width: 100%;
	background-color: var(--main-bg-color-dark);
	position: sticky;
	bottom: 0;
`;

const FooterNav = styled.nav`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const SvgContainer = styled.div`
	background-color: var(--main-bg-color);
	width: 55px;
	border-radius: 50%;
`;
