import styled, { css } from 'styled-components';

const Textarea = styled.textarea`
	text-transform: uppercase;
	background-color: var(--main-bg-color-dark);
	color: var(--text-color-light);
	border: none;
	height: 100px;
	border-radius: 19px;
	padding: 10px;
	resize: none;

	:focus {
		outline: solid 3px var(--accent-color);
	}

	::placeholder {
		color: var(--text-color-light);
		opacity: 0.5;
	}
	${({ variant }) => variant === 'detail' && css``}
`;

export default Textarea;
