import styled from 'styled-components';

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
		case 'a':
			return (
				<StyledA {...rest} as={component}>
					{children}
				</StyledA>
			);
	}
}

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
`;

const StyledPUpload = styled.p`
	color: var(--text-color-dark);
	text-transform: uppercase;
	word-wrap: break-word;
	width: 125px;
`;

const StyledA = styled.a`
	color: var(--text-color-light);
	text-transform: uppercase;
	text-decoration: none;

	:hover {
		color: var(--text-color-dark);
	}
`;
