import styled, { keyframes, css } from 'styled-components';

const enterTopRightPink = keyframes`
from {
    left: 70px;
    border-radius: 38px 38px 0 38px;
    top: -156px;
}
to {
    left: 90px;
    border-radius: 38px 0 0 38px;
    top: -146px;
}
`;

const updateTopRightPink = keyframes`
from {
    left: 90px;
    border-radius: 38px 0 0 38px;
    top: -146px;
}
to {
    left: 70px;
    border-radius: 38px 38px 0 38px;
    top: -156px;
}
`;

const Pink = styled.div`
	width: 210px;
	height: 78px;
	background-color: var(--main-bg-color);
	border-radius: 38px 38px 0 38px;
	position: relative;
	left: 70px;
	top: -156px;
	z-index: 10;
    animation: ${({ toggle }) =>
		toggle
			? css`
					${updateTopRightPink} 0.7s linear forwards
			  `
			: css`
					${enterTopRightPink} 0.7s linear forwards
			  `}; }
`;

export default Pink;
