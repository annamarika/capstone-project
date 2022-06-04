import styled, { css } from 'styled-components';

const InputSingleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	margin-bottom: 10px;

	${({ variant }) =>
		variant === 'upload' &&
		css`
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin-top: 30px;
		`}
`;
export default InputSingleContainer;
