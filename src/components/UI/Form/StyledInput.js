import styled, { css } from 'styled-components';

const Input = styled.input`
	${({ variant = 'text' }) =>
		variant === 'text' &&
		css`
			text-transform: uppercase;
			background-color: var(--main-bg-color-dark);
			color: var(--text-color-light);
			border: none;
			height: 38px;
			border-radius: 19px;
			padding: 10px;

			:focus {
				outline: solid 3px var(--accent-color);
			}

			::placeholder {
				color: var(--text-color-light);
				opacity: 1;
			}
		`}

	${({ variant }) =>
		variant === 'file' &&
		css`
			position: fixed;
			top: -100%;
			left: -100vw;
		`}
`;

export default Input;
