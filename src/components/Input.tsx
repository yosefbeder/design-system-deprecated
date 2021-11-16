import styled, { css } from 'styled-components';

interface StyledInputProps {
	isRequired?: boolean;
	isDisabled?: boolean;
}

const StyledInput = styled.input.attrs<StyledInputProps>(props => ({
	disabled: props.isDisabled,
	required: props.isRequired,
}))<StyledInputProps>`
	width: 100%;
	min-width: 10rem;
	padding: var(--space-sm) var(--space-md);
	border: 1px solid var(--color-gray-200);
	border-radius: var(--rounded-sm);
	background-color: ${props =>
		props.isDisabled ? 'var(--color-gray-200)' : 'var(--color-white)'};

	font-size: var(--font-sm);

	${props => (props.isDisabled ? 'cursor: not-allowed;' : '')}

	${props =>
		!props.isDisabled
			? css`
		&:hover {
			border-color: var(--color-gray-400);
		}

		&:active,
		&:focus {
			border-color: var(--color-blue-400);
	`
			: ''}

	transition: border-color 100ms;
`;

export default StyledInput;
