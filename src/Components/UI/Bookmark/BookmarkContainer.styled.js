import styled, { css } from 'styled-components';

const BookmarkContainer = styled.div`
	position: relative;
	z-index: 10;
	_background-color: transparent;
	height: 48px;
	width: 48px;
	margin: 20px;
	color: white;

	${({ bool = false }) => {
		if (bool) {
			return css`
				color: blue;
			`;
		}
	}}
`;

export default BookmarkContainer;
