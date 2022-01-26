import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonProps {
	children: ReactNode;
}

function Button({ children }: ButtonProps) {
	return (
		<>
			<label>Button</label>
			<Container>
				{children}
			</Container>
		</>
	);
};

export default Button;
