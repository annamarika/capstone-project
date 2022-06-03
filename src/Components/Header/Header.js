import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import MySVG from '../UI/MySVG';
import Typography from '../UI/Typography';

export default function Header() {
	const router = useRouter();

	return (
		<HeaderContainer>
			<HeaderNav>
				<Link passHref href="/">
					<LogoContainer pathName={router.pathname}>
						<Typography variant="h1">my friend`s closet</Typography>
					</LogoContainer>
				</Link>
				<Link passHref href="/profile">
					<HeaderButton pathName={router.pathname}>
						<MySVG size="24" variant="profile" />
					</HeaderButton>
				</Link>
			</HeaderNav>
		</HeaderContainer>
	);
}

const LogoContainer = styled.a`
	background: transparent;
	margin-top: 10px;
	padding: 10px;
	width: 180px;
	border-radius: 0 50px 50px 0;
	text-decoration: none;

	:hover {
		background: var(--button-bg-color);
	}
`;

const HeaderNav = styled.nav`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--main-bg-color);
`;

const HeaderContainer = styled.header`
	z-index: 20;
	width: 100%;
	position: fixed;
	left: 0px;
	top: 0;
`;

const HeaderButton = styled.a`
	background-color: ${props =>
		props.href === props.pathName ? 'var(--button-bg-color)' : 'var(--main-bg-color)'};
	width: 40px;
	border-radius: 50%;
	padding: 5px;
	border: none;
	margin: 2rem;
	display: flex;

	:after {
		content: '';
		position: absolute;
		width: 30%;
		height: 70%;
	}
`;
