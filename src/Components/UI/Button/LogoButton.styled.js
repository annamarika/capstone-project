import styled, { keyframes, css } from 'styled-components';

const enterLogoButtonStyle = keyframes`

from {font-size: 30px;
    opacity: 0;
}
to {font-size: 40px;
    opacity: 1;
}
`;

const updateLogoButtonStyle = keyframes`

0% {font-size: 40px;
    opacity: 0;}
100% {font-size: 30px;
    opacity: 1;}
`;

const LogoButtonStyle = styled.button`
	font-size: 30px;
	font-weight: 700;
	color: white;
	background-color: transparent;
	align-item: center;
	border: none;
    animation: ${({ toggle }) =>
		toggle
			? css`
					${updateLogoButtonStyle} 0.7s linear forwards
			  `
			: css`
					${enterLogoButtonStyle} 0.7s linear forwards
			  `}; }
`;

export default LogoButtonStyle;
