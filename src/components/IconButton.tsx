import styled, { css } from 'styled-components';

interface IconButtonProps {
	isLoading?: boolean;
	isDisabled?: boolean;
}

const IconButton = styled.button.attrs<IconButtonProps>(props => ({
	disabled: props.isLoading || props.isDisabled,
}))<IconButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 2.25rem;
	height: 2.25rem;
	border: 2px solid transparent;
	border-radius: var(--rounded-sm);

	&:hover {
		background-color: var(--color-gray-200);
	}

	${props =>
		!props.isLoading &&
		!props.isDisabled &&
		css`
			&:active {
				background-color: var(--color-gray-300);
			}
		`}

	&:disabled {
		background-color: var(--color-gray-100);
		color: var(--color-gray-400);
		cursor: not-allowed;
	}

	&:hover:disabled {
		background-color: var(--color-gray-200);
	}

	transition: background-color 100ms;
`;

export default IconButton;
