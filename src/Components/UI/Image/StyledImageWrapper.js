import styled, { css } from 'styled-components';

const ImageWrapper = styled.div`
	width: 250%;
	height: 386px;
	position: relative;
	object-fit: cover;
	border-radius: 50px;
	overflow: hidden;
	border: 3px solid #4b587f;

	${({ variant }) =>
		variant === 'placeholder' &&
		css`
			border-radius: 25px;
			width: 80px;
			height: 150px;
			display: block;
		`}
`;

export default ImageWrapper;
