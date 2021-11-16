import styled from 'styled-components';

const Switch = styled.input.attrs(() => ({
	type: 'checkbox',
}))`
	--width: 2.25rem;
	--height: calc(var(--width) / 2);
	--padding: 0.325rem;

	position: relative;

	width: var(--width);
	height: var(--height);
	border-radius: calc(var(--height) / 2);
	background-color: var(--color-gray-200);
	transition: background-color 100ms linear;
	cursor: pointer;

	&:hover {
		background-color: var(--color-gray-300);
	}

	&:checked {
		background-color: var(--color-blue-400);
	}

	&:checked:hover {
		background-color: var(--color-blue-500);
	}

	&:disabled {
		background-color: var(--color-gray-200);
		cursor: not-allowed;
	}

	&:disabled:hover {
		background-color: var(--color-gray-300);
	}

	&:disabled:checked {
		background-color: var(--color-gray-300);
	}

	&:disabled:checked:hover {
		background-color: var(--color-gray-400);
	}

	&::before {
		position: absolute;
		content: '';

		width: calc(var(--width) / 2 - var(--padding));
		height: calc(var(--height) - var(--padding));
		border-radius: 50%;
		background-color: var(--color-white);

		transform: translate(calc(var(--padding) / 2), calc(var(--padding) / 2));

		transition: transform 100ms ease-out;
	}

	&:checked::before {
		transform: translate(
			calc(var(--width) - var(--width) / 2 + var(--padding) / 2),
			calc(var(--padding) / 2)
		);
	}

	&:disabled::before {
		background-color: var(--color-gray-100);
	}
`;

export default Switch;
