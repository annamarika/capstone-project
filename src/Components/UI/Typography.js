import styled, { css } from 'styled-components';

export default function Typography({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'h1':
			return (
				<StyledH1 {...rest} as={component}>
					{children}
				</StyledH1>
			);
		case 'h3':
			return (
				<StyledH3 {...rest} as={component}>
					{children}
				</StyledH3>
			);

		case 'p':
			return (
				<StyledP {...rest} as={component}>
					{children}
				</StyledP>
			);
		case 'pUpload':
			return (
				<StyledPUpload {...rest} as={component}>
					{children}
				</StyledPUpload>
			);
		case 'username':
			return (
				<StyledUsername {...rest} as={component}>
					{children}
				</StyledUsername>
			);
		case 'a':
			return (
				<StyledA {...rest} as={component}>
					{children}
				</StyledA>
			);
	}
}

const StyledUsername = styled.p`
	color: var(--text-color-light);
	background-color: var(--text-color-dark);
	text-transform: uppercase;
	word-wrap: break-word;
	align-text: center;
	padding: 5px;
	border-radius: 15px;
`;

const StyledH1 = styled.h1`
	color: var(--text-color-dark);
	text-transform: uppercase;
	word-wrap: break-word;
`;

const StyledH3 = styled.h3`
	color: var(--text-color-dark);
	text-transform: uppercase;
	text-decoration: none;
`;

const StyledP = styled.p`
	color: var(--text-color-dark);
	text-transform: uppercase;
	padding-bottom: 10px;
	border-bottom: solid 3px #db6c4c;
	word-wrap: break-word;
	text-decoration: none;

	${({ border }) =>
		border === 'none' &&
		css`
			border-bottom: none;
			padding-bottom: 0;
		`}

	${({ color }) =>
		color === 'white' &&
		css`
			color: var(--text-color-light);
			border-bottom: none;
			padding-bottom: 0;
		`}
`;

const StyledPUpload = styled.p`
	color: var(--text-color-dark);
	text-align: center;
	text-transform: uppercase;
	word-wrap: break-word;
	width: 140px;
	padding: 15px;
`;

const StyledA = styled.a`
	color: var(--text-color-light);
	text-transform: uppercase;
	text-decoration: none;

	:hover {
		color: var(--text-color-dark);
	}
`;
