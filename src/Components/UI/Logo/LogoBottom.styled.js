import styled, { keyframes, css } from 'styled-components';

const enterBottom = keyframes`
from {
    top: -156px;
    height: 126px;
}
to {
    top: -166px;
    height: 136px;
}
`;

const updateBottom = keyframes`
from {
    top: -166px;
    height: 136px
}
to {
    top: -156px;
    height: 126px;
}
`;

const Bottom = styled.div`
	width: 280px;
	height: 126px;
	background-color: var(--main-bg-color-dark);
	position: relative;
	top: -156px;
    animation: ${({ toggle }) =>
		toggle
			? css`
					${updateBottom} 0.7s linear forwards
			  `
			: css`
					${enterBottom} 0.7s linear forwards
			  `}; }
`;

export default Bottom;
