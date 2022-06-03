import styled from 'styled-components';
import LogoButton from '../Button/LogoButton';

export default function Logo() {
	return (
		<LogoBG>
			<TopLeft>
				<TopRightOrange />
				<TopRightPink />
			</TopLeft>
			<Bottom>
				<BottomWhite>
					<LogoButton />
				</BottomWhite>
			</Bottom>
			<Legs>
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
	_width: 100;
	border-radius: 40px;
`;

const TopLeft = styled.div`
	width: 140px;
	height: 155px;
	background-color: #4b587f;
	border-radius: 50% 50% 0 0;
	position: relative;
`;

const TopRightOrange = styled.div`
	width: 210px;
	height: 78px;
	background-color: #db6c4c;
	border-radius: 0 38px 38px 0;
	position: absolute;
	left: 70px;
	z-index: -10;
`;

const TopRightPink = styled.div`
	width: 210px;
	height: 78px;
	background-color: #e2cadf;
	border-radius: 38px 38px 0 38px;
	position: absolute;
	left: 70px;
	top: 77px;
	z-index: 10;
`;
const Bottom = styled.div`
	width: 280px;
	height: 126px;
	background-color: #4b587f;
	position: relative;
`;

const BottomWhite = styled.div`
	width: 254px;
	height: 96px;
	background-color: white;
	border-radius: 0 50px 0 50px;
	position: absolute;
	left: 13px;
	top: 15px;
	transition: booky 1s;
	animation: BottomWhiteAnimation 2s ease-in;
	display: flex;
	justify-content: center;
`;

const Legs = styled.div`
	position: relative;
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
