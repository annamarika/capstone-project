import styled, { keyframes, css } from 'styled-components';

const enter = keyframes`
from {
    left: 0px;
    top: 0px;
    border-radius: 50% 50% 0 0;  
}
to {
    left: -20px;
    top: 10px;
    border-radius: 0 50% 0 0;  
}`;

const update = keyframes`
from {
    left: -20px;
    top: 10px;
    border-radius: 0 50% 0 0;
}
to {
    left: 0px;
    top: 0px;
    border-radius: 50% 50% 0 0;
}`;

const TopLeft = styled.div`
	width: 140px;
	height: 155px;
	background-color: var(--main-bg-color-dark);
	border-radius: 50% 50% 0 0;
	position: relative;
    animation: ${({ toggle }) =>
		toggle
			? css`
					${update} 0.7s linear forwards
			  `
			: css`
					${enter} 0.7s linear forwards
			  `}; }
`;

export default TopLeft;
