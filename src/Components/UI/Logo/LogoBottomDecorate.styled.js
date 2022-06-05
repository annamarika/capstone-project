import styled, { keyframes, css } from 'styled-components';

const enterBottomDecorate = keyframes`

from {height: 96px;
    width: 254px;
    left: 13px;
    top: 15px;
    border-radius: 50px 50px 50px 50px;
    }
to {height: 116px;
    width: 280px;
    left: 0px;
    top: 20px;
    border-radius: 0;  
}
`;

const updateBottomDecorate = keyframes`

from {height: 116px;
    width: 280px;
    left: 0px;
    top: 20px;
    border-radius: 0;
    }
to {height: 96px;
    width: 254px;
    left: 13px;
    top: 15px;
    border-radius: 50px 50px 50px 50px;
    }
`;

const BottomDecorate = styled.div`
    opacity: 1;
    background: repeating-linear-gradient( -45deg, var(--main-bg-color), var(--main-bg-color) 4px, var(--main-bg-color-dark) 4px, var(--main-bg-color-dark) 20px );
	width: 254px;
	height: 96px;
	border-radius: 0;
	position: absolute;
	left: 0px;
	top: 20px;
	display: flex;
	justify-content: center;
    align-items: center;
    animation: ${({ toggle }) =>
		toggle
			? css`
					${updateBottomDecorate} 0.7s linear forwards
			  `
			: css`
					${enterBottomDecorate} 0.7s linear forwards
			  `}; }
`;

export default BottomDecorate;
