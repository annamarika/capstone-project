import styled from 'styled-components';

const FooterButton = styled.button`
	background-color: ${props =>
		props.href === props.pathName ? 'var(--button-bg-color)' : 'var(--main-bg-color)'};
	width: 55px;
	height: 55px;
	border-radius: 50%;
	padding: 5px;
	border: none;
	margin: 1.5rem;
	display: flex;
	justify-content: center;
	border: none;

	:after {
		content: '';
		position: absolute;
		width: 30%;
		height: 70%;
	}
`;

export default FooterButton;
