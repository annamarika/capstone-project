import styled, { css } from 'styled-components';

const Container = styled.div`
	display: flex;

	${({ variant }) =>
		variant === 'product' &&
		css`
			background-color: white;
			width: 90vw;
			height: 436px;
			padding: 20px 0 20px 20px;
			border-radius: 50px;
			margin: 10px;
		`}
	${({ variant }) =>
		variant === 'imageUpload' &&
		css`
			width: 80%;
			justify-content: space-around;
			align-items: center;
		`}
`;

export default Container;
