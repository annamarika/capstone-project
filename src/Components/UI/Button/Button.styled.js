import styled from 'styled-components';

const DefaultButton = styled.button`
	text-transform: uppercase;
	font-weight: 600;
	color: var(--text-color-light);
	background-color: var(--button-bg-color);
	border-radius: 19px;
	border: none;
	display: flex;
	justify-content: center;
	padding: 7px 13px;
	margin: 0 10px 0 10px;
	max-width: 209px;
	z-index: 40px

	:hover {
		color: var(--text-color-dark);
	}
`;

export default DefaultButton;
