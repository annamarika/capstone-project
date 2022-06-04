import styled, { css } from 'styled-components';

const Legs = styled.div`
	background-color: #4b587f;
	width: 25px;
	height: 53px;
	border-radius: 0 0 12.8px 12.8px;
	position: absolute;

	${({ variant }) =>
		variant === 'legRight' &&
		css`
			left: 255px;
		`}
`;

export default Legs;
