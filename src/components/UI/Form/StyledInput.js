import styled from 'styled-components';

const Input = styled.input`
	text-transform: uppercase;
	background-color: var(--main-bg-color-dark);
	color: var(--text-color-light);
	border: none;
	height: 38px;
	border-radius: 19px 0 0 19px;
	padding: 10px;

	:focus {
		outline: solid 3px var(--accent-color);
	}

	::placeholder {
		color: var(--text-color-light);
		opacity: 1;
	}
`;

export default Input;
