import styled from 'styled-components';

const Switch = styled.input.attrs(() => ({
	type: 'checkbox',
}))`
	--width: 2.25rem;
	--height: calc(var(--width) / 2);
	--padding: 0.25rem;

	position: relative;

	width: var(--width);
	height: var(--height);
	border-radius: calc(var(--height) / 2);
	background-color: var(--color-gray-200);
	border: 1px solid var(--color-gray-200);
	transition: background-color 100ms, border-color 100ms;
	cursor: pointer;

	&:hover {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:checked:hover {
		background-color: var(--color-blue-500);
		border-color: var(--color-blue-500);
	}

	&:disabled {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
		cursor: not-allowed;
	}

	&:disabled:hover {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}

	&:disabled:checked {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}

	&:disabled:checked:hover {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}

	&::before {
		position: absolute;
		content: '';
		top: 50%;

		width: calc(var(--width) / 2 - var(--padding) * 2);
		height: calc(var(--height) - var(--padding) * 2);
		border-radius: 50%;
		background-color: var(--color-white);

		transform: translate(var(--padding), -50%);

		transition: transform 100ms ease-out;
	}

	&:checked::before {
		transform: translate(
			calc(
				var(--width) - calc(var(--width) / 2 - var(--padding) * 2) -
					var(--padding)
			),
			-50%
		);
	}

	&:disabled::before {
		background-color: var(--color-gray-100);
	}
`;

export default Switch;
