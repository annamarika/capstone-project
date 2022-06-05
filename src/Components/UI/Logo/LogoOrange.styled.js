import styled, { keyframes, css } from 'styled-components';

const enterOrange = keyframes`
from {
    left: 70px;
    top: -155px;
}
to {
    left: 40px;
    top: -120px;
}
`;

const updateOrange = keyframes`
from {
    left: 40px;
    top: -120px;
}
to {
    left: 70px;
    top: -155px;
}
`;

const Orange = styled.div`
	width: 210px;
	height: 78px;
	background-color: var(--accent-color);
	border-radius: 0 38px 38px 0;
	position: relative;
	left: 70px;
	top: -155px;
	z-index: -10;
    animation: ${({ toggle }) =>
		toggle
			? css`
					${updateOrange} 0.7s linear forwards
			  `
			: css`
					${enterOrange} 0.7s linear forwards
			  `}; }
`;

export default Orange;
