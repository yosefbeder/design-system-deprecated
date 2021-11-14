import styled from 'styled-components';

const variables = new Map([
	[1, 'var(--shadow-sm)'],
	[2, 'var(--shadow-md)'],
	[3, 'var(--shadow-lg)'],
	[4, 'var(--shadow-xl)'],
	[5, 'var(--shadow-2xl)'],
]);

interface CardProps {
	elivate: number;
}

const Card = styled.div<CardProps>`
	box-shadow: ${props => variables.get(props.elivate)};
	border-bottom: 1px solid var(--color-gray-200);
`;

export default Card;
