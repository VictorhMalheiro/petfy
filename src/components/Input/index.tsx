import { Container } from './styles'
import '../Input/styles'

export function Input(name, ...rest) {
	return (
		<>
			<Container type="text" id={name} {...rest} />
		</>
	)
}
