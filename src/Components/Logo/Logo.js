import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import LogoButtonStyle from '../UI/Button/LogoButton.styled';

export default function Logo() {
	const [toggle, setToggle] = useState(false);

	return (
		<LogoBG>
			<TopLeft toggle={toggle} />
			<Orange toggle={toggle} />
			<TopRightPink toggle={toggle} />

			<Bottom toggle={toggle}>
				<BottomWhite toggle={toggle}>
					<LogoButtonStyle
						toggle={toggle}
						type="button"
						onClick={() => setToggle(!toggle)}
					>
						{toggle ? 'OPEN' : 'CLOSE'}
					</LogoButtonStyle>
				</BottomWhite>
			</Bottom>
			<Legs toggle={toggle}>
				<LegsLeft />
				<LegsRight />
			</Legs>
		</LogoBG>
	);
}

const LogoBG = styled.div`
	display: flow-root;
	background: white;
	z-index: -20;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	height: 375px;
	border-radius: 40px;
`;

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
}

`;

const update = keyframes`
0% {
    left: -20px;
    top: 10px;
    border-radius: 0 50% 0 0;
}
100% {
    left: 0px;
    top: 0px;
    border-radius: 50% 50% 0 0;
}
`;

const TopLeft = styled.div`
	width: 140px;
	height: 155px;
	background-color: #4b587f;
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

const enterOrange = keyframes`
from {left: 70px;
top: -155px;}
to {left: 40px;
    top: -120px;}
`;

const updateOrange = keyframes`
0% {left: 40px;
    top: -120px;}
100% {left: 70px;
    top: -155px;}
`;

const Orange = styled.div`
	width: 210px;
	height: 78px;
	background-color: #db6c4c;
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

const enterTopRightPink = keyframes`
from {left: 70px;
    border-radius: 38px 38px 0 38px;
    top: -156px;}
to {left: 90px;
    border-radius: 38px 0 0 38px;
    top: -146px;}

`;

const updateTopRightPink = keyframes`
0% {left: 90px;
    border-radius: 38px 0 0 38px;
    top: -146px;}
100% {left: 70px;
    border-radius: 38px 38px 0 38px;
    top: -156px;}
`;

const TopRightPink = styled.div`
	width: 210px;
	height: 78px;
	background-color: #e2cadf;
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

const enterBottom = keyframes`

from {top: -156px;
    height: 126px;}
to {top: -166px;
    height: 136px;
}
`;

const updateBottom = keyframes`

0% {top: -166px;
    height: 136px}
100% {top: -156px;
    height: 126px;}
`;

const Bottom = styled.div`
	width: 280px;
	height: 126px;
	background-color: #4b587f;
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

const enterBottomWhite = keyframes`

from {height: 96px;
    width: 254px;
    left: 13px;
    top: 15px;
    border-radius: 50px 50px 50px 50px;
    background-color: #4b587f;
    }
to {height: 116px;
    width: 280px;
    left: 0px;
    top: 20px;
    border-radius: 0;
    background-color: #4b587f;
    
}
`;

const updateBottomWhite = keyframes`

0% {height: 116px;
    width: 280px;
    left: 0px;
    top: 20px;
    border-radius: 0;
    }
100% {height: 96px;
    width: 254px;
    left: 13px;
    top: 15px;
    border-radius: 50px 50px 50px 50px;
    }
`;

const BottomWhite = styled.div`
	width: 254px;
	height: 96px;
    border: solid 3px #db6c4c;
	border-radius: 0 50px 0 50px;
	position: absolute;
	left: 13px;
	top: 15px;
	display: flex;
	justify-content: center;
    animation: ${({ toggle }) =>
		toggle
			? css`
					${updateBottomWhite} 0.7s linear forwards
			  `
			: css`
					${enterBottomWhite} 0.7s linear forwards
			  `}; }
`;

const enterLegs = keyframes`

from {top: -156px;
    }
to {top: -166px;
    
}
`;

const updateLegs = keyframes`

0% {top: -166px;
    }
100% {top: -156px;
    }
`;

const Legs = styled.div`
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

const LegsLeft = styled.div`
	background-color: #4b587f;
	width: 25px;
	height: 53px;
	border-radius: 0 0 12.8px 12.8px;
	position: absolute;
`;

const LegsRight = styled.div`
	background-color: #4b587f;
	width: 25px;
	height: 53px;
	border-radius: 0 0 12.8px 12.8px;
	position: absolute;
	left: 255px;
`;
