import styled, { css } from 'styled-components';

const InputSingleContainer = styled.div`
	_width: 338px;
	display: flex;
	flex-direction: column;
	gap: 12px;

	${({ variant }) =>
		variant === 'upload' &&
		css`
			flex-direction: column;
			justify-content: center;
			align-items: center;
		`}
`;
export default InputSingleContainer;
