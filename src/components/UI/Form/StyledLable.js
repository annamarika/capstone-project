import styled, { css } from 'styled-components';

const Label = styled.label`
	padding-left: 10px;

	${({ variant }) =>
		variant === 'headline' &&
		css`
		border-bottom: solid 3px var(--accent-color);
		padding-bottom: 12px;
      }
    `}
`;
export default Label;
