import React from 'react';
import { StyledButtonTertiary } from './Button';
import { Strong } from '../typography';

interface NavLinkPrpos {
	isNavigatedTo: boolean;
	onNavigate: () => void;
}

const NavLink: React.FC<NavLinkPrpos> = ({
	children,
	isNavigatedTo,
	onNavigate,
}) => {
	return (
		<StyledButtonTertiary onClick={onNavigate}>
			{isNavigatedTo ? <Strong>{children}</Strong> : children}
		</StyledButtonTertiary>
	);
};

export default NavLink;
