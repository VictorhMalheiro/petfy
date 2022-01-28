import { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps {
	children: ReactNode
	variant?: string
	hoverColor?: string
}

function Button({ children, variant, hoverColor }: ButtonProps) {
	return (
		<>
			<Container variant={variant} hoverColor={hoverColor}>
				{children}
			</Container>
		</>
	)
}

export default Button
