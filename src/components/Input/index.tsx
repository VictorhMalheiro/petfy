import { Container } from './styles'
import '../Input/styles'

export function Input(name, ...rest) {
	return (
		<>
			<Container>
				<input type="text" id={name} {...rest} />
			</Container>
		</>
	)
}
