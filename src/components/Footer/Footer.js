import Link from 'next/link';
import styled from 'styled-components';
import MySVG from '../UI/MySVG';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterNav>
				<Link passHref href="/products">
					<FooterButton type="button">
						<SvgContainer>
							<MySVG size="34" variant="products" />
						</SvgContainer>
					</FooterButton>
				</Link>
				<Link passHref href="/create">
					<FooterButton type="button">
						<SvgContainer>
							<MySVG size="34" variant="add" />
						</SvgContainer>
					</FooterButton>
				</Link>
				<Link passHref href="/profile">
					<FooterButton type="button">
						<SvgContainer>
							<MySVG size="34" variant="profile" />
						</SvgContainer>
					</FooterButton>
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
	padding: 5px;
`;

const FooterButton = styled.button`
	background-color: var(--main-bg-color-dark);
	border: none;
	padding: 1.5rem;
	height: 100%;
	width: 33%;
	display: flex;
	justify-content: center;
	border: none;
`;
