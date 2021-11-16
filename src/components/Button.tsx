import React from 'react';
import styled, { css } from 'styled-components';
import LoadingSpinner from './LoadingSpinner';

interface StyledButtonProps {
	loading?: boolean;
}

const ButtonSharedStyles = css`
	padding: var(--space-sm) var(--space-md);
	border-radius: var(--rounded-sm);
	user-select: none;

	transition: border-color 100ms, background-color 100ms, color 100ms;
`;

export const StyledButtonPrimary = styled.button.attrs<StyledButtonProps>(
	props => ({
		disabled: props.loading || props.disabled,
	}),
)<StyledButtonProps>`
	${ButtonSharedStyles}

	${props => {
		const color = props.loading
			? 'var(--color-blue-300)'
			: props.disabled
			? 'var(--color-gray-400)'
			: 'var(--color-blue-400)';

		return css`
			background-color: ${color};
			border: 2px solid ${color};
		`;
	}}

	color: var(--color-white);

	&:hover {
		${props => {
			const color = props.loading
				? 'var(--color-blue-400)'
				: props.disabled
				? 'var(--color-gray-500)'
				: 'var(--color-blue-500)';

			return css`
				background-color: ${color};
				border-color: ${color};
			`;
		}}
	}

	${props =>
		!props.loading &&
		!props.disabled &&
		css`
			&:active {
				background-color: var(--color-blue-600);
				border-color: var(--color-blue-600);
			}
		`}

	&:disabled {
		cursor: not-allowed;
	}
`;

export const StyledButtonSecondary = styled.button.attrs<StyledButtonProps>(
	props => ({
		disabled: props.loading || props.disabled,
	}),
)<StyledButtonProps>`
	${ButtonSharedStyles}

	${props => {
		const color = props.loading
			? 'var(--color-blue-300)'
			: props.disabled
			? 'var(--color-gray-400)'
			: 'var(--color-blue-400)';

		return css`
			color: ${color};
			border: 2px solid ${color};

			&:hover {
				background-color: ${color};
			}
		`;
	}}

	background-color: var(--color-white);

	&:hover {
		color: var(--color-white);
	}

	${props =>
		!props.loading &&
		!props.disabled &&
		css`
			&:active {
				background-color: var(--color-blue-500);
				border-color: var(--color-blue-500);
			}
		`}

	&:disabled {
		cursor: not-allowed;
	}
`;

export const StyledButtonTertiary = styled.button.attrs<StyledButtonProps>(
	props => ({
		disabled: props.loading || props.disabled,
	}),
)<StyledButtonProps>`
	${ButtonSharedStyles}

	border: 2px solid transparent;

	&:hover {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
	}

	${props =>
		!props.loading &&
		!props.disabled &&
		css`
			&:active {
				background-color: var(--color-gray-300);
				border-color: var(--color-gray-300);
			}
		`}

	&:disabled {
		background-color: var(--color-gray-100);
		color: var(--color-gray-400);
		cursor: not-allowed;
	}

	&:hover:disabled {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
	}
`;

export const PrimaryLoadingSpinner = styled(LoadingSpinner)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-white);
`;

export const SecondaryLoadingSpinner = styled(LoadingSpinner)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-blue-400);
`;

export const TertiaryLoadingSpinner = styled(LoadingSpinner)`
	border: 2px solid var(--color-white);
	border-left: 2px solid var(--color-gray-400);
`;

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonState = 'normal' | 'loading' | 'disabled';

const getStyledButtonProps = (state: ButtonState) => {
	return { disabled: state === 'disabled', loading: state === 'loading' };
};

interface ButtonProps {
	variant?: ButtonVariant;
	state?: ButtonState;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	state = 'normal',
	children,
	leftIcon,
	rightIcon,
}) => {
	const StyledButton =
		variant === 'primary'
			? StyledButtonPrimary
			: variant === 'secondary'
			? StyledButtonSecondary
			: StyledButtonTertiary;

	if (leftIcon) {
		const StyledButtonWithLeftIcon = styled(StyledButton)`
			display: flex;

			& > *:first-child {
				margin-right: var(--space-md);
			}
		`;

		return (
			<StyledButtonWithLeftIcon {...getStyledButtonProps(state)}>
				{leftIcon} {children}
			</StyledButtonWithLeftIcon>
		);
	}

	if (rightIcon) {
		const StyledButtonWithLeftIcon = styled(StyledButton)`
			display: flex;

			& > *:last-child {
				margin-left: var(--space-md);
			}
		`;

		return (
			<StyledButtonWithLeftIcon {...getStyledButtonProps(state)}>
				{children} {rightIcon}
			</StyledButtonWithLeftIcon>
		);
	}

	return (
		<StyledButton {...getStyledButtonProps(state)}>{children}</StyledButton>
	);
};

export default Button;
