import styled from 'styled-components';

const Radio = styled.input.attrs(() => ({ type: 'radio' }))`
	--padding: var(--space-vsm);
	--size: 1.125rem;

	position: relative;

	display: block;
	width: var(--size);
	height: var(--size);
	border-radius: var(--rounded-full);
	border: 1px solid var(--color-gray-200);
	background-color: var(--color-white);

	transition: border-color 100ms, background-color 100ms;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		width: calc(var(--size) - var(--padding) * 2);
		height: calc(var(--size) - var(--padding) * 2);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: var(--rounded-full);

		background-color: var(--color-white);
	}

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-gray-100);
	}

	&:disabled::before {
		background-color: var(--color-gray-100);
	}

	&:hover {
		border-color: var(--color-gray-400);
	}

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:disabled:checked {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}
`;

export default Radio;
