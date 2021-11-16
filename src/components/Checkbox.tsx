import React from 'react';
import styled from 'styled-components';
import { HiCheck as Check } from 'react-icons/hi';

const StyledCheck = styled(Check)`
	position: absolute;
	display: block;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: var(--color-white);
	pointer-events: none;
`;

const Checkbox = styled.input.attrs(() => ({ type: 'checkbox' }))`
	display: block;

	width: 1.125rem;
	height: 1.125rem;
	background-color: var(--color-white);
	border-radius: var(--rounded-sm);
	border: 1px solid var(--color-gray-200);
	transition: border-color 100ms, background-color 100ms;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-gray-100);
	}

	&:disabled + ${StyledCheck} {
		color: var(--color-gray-100);
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

const Container = styled.div`
	position: relative;

	color: var(--color-white);
`;

export const IconProvider: React.FC = ({ children }) => {
	return (
		<Container>
			{children}
			<StyledCheck size={16} />
		</Container>
	);
};

export default Checkbox;
