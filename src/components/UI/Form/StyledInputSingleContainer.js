import styled, { css } from 'styled-components';

const InputSingleContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	${({ variant }) =>
		variant === 'upload' &&
		css`
			justify-content: center;
			align-items: center;
		`}
`;
export default InputSingleContainer;
