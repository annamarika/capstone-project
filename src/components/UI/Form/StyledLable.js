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

	${({ variant }) =>
		variant === 'upload' &&
		css`
		font-weight: 600;
		background-color: var(--accent-color);
		color: var(--text-color-light);
		border: none;
		border-radius: 19px;
		padding: 7px 13px;
      }
    `}
`;
export default Label;
