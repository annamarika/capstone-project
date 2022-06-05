import styled, { keyframes, css } from 'styled-components';

const enterLegs = keyframes`

from {top: -156px;
    }
to {top: -166px;
    
}
`;

const updateLegs = keyframes`

from {top: -166px;
    }
to {top: -156px;
    }
`;

const LegsContainer = styled.div`
	position: relative;
	top: -156px;
    animation: ${({ toggle }) =>
		toggle
			? css`
					${updateLegs} 0.7s linear forwards
			  `
			: css`
					${enterLegs} 0.7s linear forwards
			  `}; }
`;

export default LegsContainer;
